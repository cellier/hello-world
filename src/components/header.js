import React from "react"
import { Link } from "gatsby"
import "./header.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <header className={this.state.hasScrolled ? "HeaderScrolled" : ""}>
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
  }
}

export default Header
