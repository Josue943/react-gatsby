import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = () => {
  /*con activeclassname react va poner esa propiedad si ve que estamos en esa pagina */
  return (
    <Navbar>
      <NavLink activeClassName="actual" to={"/"}>
        Home
      </NavLink>
      <NavLink activeClassName="actual" to={"/about"}>
        About us
      </NavLink>
    </Navbar>
  )
}

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
  .actual {
    border-bottom: 2px solid #fff;
  }
`
const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
`

export default Nav
