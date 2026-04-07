import Layout from "~/layout/Layout.jsx";
import Home from "~/pages/home/Home.jsx";
import { useEffect } from "react";
import { trackIframeHeight } from "~/utils/trackIframeHeight";

export default function App() {
  useEffect(() => {
    const cleanup = trackIframeHeight();
    return cleanup;
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
