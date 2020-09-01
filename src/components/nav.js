import React, { useState } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { FaBars } from "react-icons/fa"
import { Link, animateScroll as scroll } from "react-scroll"

const NavBar = styled.nav`
  padding-top: 3em;
  .burger {
    display: none;
  }
  ul {
    margin: 0;
    font-weight: normal;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    margin-left: 1em;
    cursor: pointer;
    transition: 0.2s;
    transition-timing-function: ease-in;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  @media (max-width: 600px) {
    padding: 2em 0 1em 0;
    .burger {
      float: right;
      display: block;
    }
    ul {
      width: 100%;
      display: ${props => (props.show ? "flex" : "none")};
      flex-direction: column;
      text-align: center;
      padding: 0;
    }
    li {
      margin-top: 1em;
    }
    a {
      margin: 1em 0;
    }
  }
`

const Nav = () => {
  const [isExpanded, setisExpanded] = useState(false)
  const handleClick = () => {
    setisExpanded(!isExpanded)
    console.log("clicked")
  }

  return (
    <Fade top delay={2000} duration={2000}>
      <NavBar show={isExpanded}>
        <FaBars onClick={() => handleClick()} className="burger" size="2em" />
        <ul>
          <li>
            <Link to="works" smooth={true} duration={500}>
              Works
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </NavBar>
    </Fade>
  )
}

export default Nav
