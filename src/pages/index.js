import React from "react"
import { Link } from "gatsby"
import Header from "../components/header.js"
import "./index.scss"

export default () => (
  <div className="Hero">
    <Header headerText="2" />
    <div className="HeroGroup">
      <h1>Learn to design and code React apps</h1>
      <p>
        Complete courses about the best tools and design systems. Prototype and
        build apps with React and Swift.
      </p>
      <Link to="/about">Watch the video</Link>
    </div>
  </div>
)
