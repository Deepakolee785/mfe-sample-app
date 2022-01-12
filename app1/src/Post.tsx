import React from "react";

const Post = ({ title, body }) => {
  return (
    <div
      style={{
        width: "20rem",
        border: "1px solid purple",
        margin: "1rem",
        padding: "0.5rem 1rem",
      }}
    >
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
