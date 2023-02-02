import React, { useState, useEffect } from "react";

const Anchor = ({ href, children }) => {
  const handleClick = e => {
    e.preventDefault();
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Anchor;
