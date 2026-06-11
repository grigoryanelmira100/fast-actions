import { lazy, Suspense, useEffect, useState } from "react";
import Hero from "~/components/home/Hero.jsx";

const HomeBelowFold = lazy(() => import("~/components/home/HomeBelowFold.jsx"));

const Home = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShowBelowFold(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <Hero />
      {showBelowFold && (
        <Suspense fallback={null}>
          <HomeBelowFold />
        </Suspense>
      )}
    </>
  );
};

export default Home;
