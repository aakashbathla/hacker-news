import React from "react";

const Nav = () => {
  return (
    <div className="d-flex nav nav__mobile">
      <div>
        <img
          className="nav__image ml25"
          src="https://news.ycombinator.com/y18.gif"
          alt="logo image"
        />
        <span className="nav__title ml25">Hacker News</span>
      </div>
      <div className="nav__mobile--padding">
        <span className="nav__links ml25">
          <a className="active" href="top">
            Top
          </a>
        </span>
      </div>
    </div>
  );
};

export default Nav;
