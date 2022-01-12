import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem",
      }}
    >
      {posts?.map((p) => (
        <Post key={p.id} title={p.title} body={p.body} />
      ))}
    </div>
  );
};

export default Posts;
