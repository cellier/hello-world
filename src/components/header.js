import React from "react"
import { Link } from "gatsby"
import "./header.scss"

export default () => (
  <header>
    <div className="HeaderGroup">
      <Link to="/">
        <img
          src={require("../images/logo-designcode.svg")}
          width="30"
          alt="logo"
        />
      </Link>
      <Link to="/">Courses</Link>
      <Link to="/">Downloads</Link>
      <Link to="/">Workshop</Link>
      <Link to="/">Sign in</Link>
      <Link to="/">
        <button>Sign Up</button>
      </Link>
    </div>
  </header>
)
