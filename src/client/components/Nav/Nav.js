import React from "react";

const Nav = () => {
  return (
    <div className="d-flex bg-warning">
      <img src="https://news.ycombinator.com/y18.gif" alt="logo image" />
      <span>Hacker News</span>
      <span>
        <a href="top">Top |</a>
        <a href="new">aakash</a>
      </span>
    </div>
  );
};

export default Nav;
