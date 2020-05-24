import React from "react";

const Nav = () => {
  return (
    <div className="d-flex nav">
      <img
        className="nav__image ml25"
        src="https://news.ycombinator.com/y18.gif"
        alt="logo image"
      />
      <span className="nav__title ml25">Hacker News</span>
      <span className="nav__links ml25">
        <a className="active" href="top">
          Top |
        </a>
        <a className="ml10" href="new">
          New
        </a>
      </span>
    </div>
  );
};

export default Nav;
