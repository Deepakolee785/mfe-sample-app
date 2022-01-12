import React, { useState, lazy, Suspense } from "react";

import ErrorBoundary from "./ErrorBoundary";
import Posts from "./Posts";

const Button = lazy(() => import("components/Button"));
const Header = lazy(() => import("components/Header"));
const Footer = lazy(() => import("components/Footer"));

import { useGetPostsQuery } from "API/services";

const App = () => {
  const [fetch, setFetch] = useState(true);

  const { isLoading, data } = useGetPostsQuery("", { skip: fetch });

  return (
    <>
      <Suspense fallback={<>Loading....</>}>
        <ErrorBoundary>
          <Header />
          <div style={{ padding: "1rem" }}>
            <Button
              title="Fetch Posts"
              onClick={() => setFetch((prev) => !prev)}
            />
            {isLoading ? <h3>Loading posts...</h3> : <Posts posts={data} />}
          </div>
          <Footer />
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

export default App;
