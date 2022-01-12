import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        height: "40px",
        background: "purple",
        color: "#fff",
        fontWeight: 700,
        fontSize: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Footer &copy; {new Date().getFullYear()}. All rights reserved
    </footer>
  );
};

export default Footer;
