const FULL_CONTENT_HEIGHT_EVENT = "full-content-height";

const postHeightToParent = (height) => {
  window.parent.postMessage(
    { [FULL_CONTENT_HEIGHT_EVENT]: height },
    "*",
  );
};

export const trackIframeHeight = () => {
  if (typeof window === "undefined" || !document?.body) return () => {};

  let idleCallbackId;
  let scheduleTimeoutId;
  let roTimeoutId;
  let cancelled = false;
  let observerCleanup = null;

  const run = () => {
    if (cancelled) return;

    const postHeight = () => {
      if (cancelled) return;
      postHeightToParent(document.body.scrollHeight);
    };

    const observer = new ResizeObserver(() => {
      if (roTimeoutId) window.clearTimeout(roTimeoutId);
      roTimeoutId = window.setTimeout(postHeight, 400);
    });

    observer.observe(document.body);
    postHeight();

    observerCleanup = () => {
      if (roTimeoutId) window.clearTimeout(roTimeoutId);
      observer.disconnect();
    };
  };

  if (typeof window.requestIdleCallback === "function") {
    idleCallbackId = window.requestIdleCallback(run, { timeout: 2500 });
  } else {
    scheduleTimeoutId = window.setTimeout(run, 1);
  }

  return () => {
    cancelled = true;
    if (idleCallbackId != null) window.cancelIdleCallback(idleCallbackId);
    if (scheduleTimeoutId != null) window.clearTimeout(scheduleTimeoutId);
    if (observerCleanup) observerCleanup();
  };
};
