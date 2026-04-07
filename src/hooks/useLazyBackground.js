import { useEffect, useRef, useState } from "react";

const DEFAULT_ROOT_MARGIN = "200px";

export function useLazyBackground(imageUrl, options = {}) {
  const { rootMargin = DEFAULT_ROOT_MARGIN } = options;
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || loaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [imageUrl, loaded, rootMargin]);

  const style = loaded ? { backgroundImage: `url(${imageUrl})` } : undefined;

  return { ref, style };
}
