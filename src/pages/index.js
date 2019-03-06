import React from "react"
import { Link } from "gatsby"
import "../styles/global.scss"

export default () => (
  <div style={{ color: "purple" }}>
    <Link to="/about">About</Link>
    <h1>Hello Gatsby2!</h1>
    <p>what a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
