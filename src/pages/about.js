import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: "teal" }}>
    <Link to="/">Home</Link>
    <Header headerText="what?" />
    <h1>about gatsby</h1>
    <p>such now, very react.</p>
  </div>
)
