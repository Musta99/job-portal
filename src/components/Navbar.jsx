import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <img
          className="h-12"
          src="https://img.icons8.com/ios11/512/react.png"
          alt=""
        />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">JOB PORTAL</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost">Home</button>
        <button className="btn btn-ghost ">Jobs</button>
        <button className="btn btn-ghost ">Add Jobs</button>
      </div>
    </div>
  );
}

export default Navbar;
