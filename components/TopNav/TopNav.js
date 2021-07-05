import React from "react";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className="top-bar">
      <div className="nav">
          <h1>
            <span className="main-heading">Astronauts</span>
          </h1>
        <div className="nav-links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/new">
            <a>Add Crew Member</a>
          </Link>
          Theme Mod
        </div>
      </div>
    </div>
  );
};

export default TopNav;
