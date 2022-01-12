import React, { useEffect } from "react";
import API from "./api";
const App = () => {
  useEffect(() => {
    API.fetchPost().then(console.log);
  }, []);
  return <h1>Hello from API MFE.</h1>;
};

export default App;
