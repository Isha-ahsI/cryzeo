import React from "react";
import ScrollToTop from "./components/ScrollToTop"
import Layout from "./components/layout/Layout";
import RoutePath from "./components/routes/RoutePath";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <RoutePath />
      </Layout>
    </>
  );
}

export default App;
