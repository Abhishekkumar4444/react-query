import React from "react"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link
        to="/"
        style={{ textDecoration: "none", margin: "0 2px", fontSize: "32px" }}
      >
        Home
      </Link>
      <Link
        to="profile"
        style={{ textDecoration: "none", margin: "0 2px", fontSize: "32px" }}
      >
        Profile
      </Link>
      <Link to="contact" style={{ textDecoration: "none", fontSize: "32px" }}>
        Contact
      </Link>
    </div>
  )
}

export default Navbar
