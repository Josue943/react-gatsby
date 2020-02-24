import React from "react"
import styled from "@emotion/styled"
import Nav from "./Nav"
import { Link } from "gatsby"

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <div className="head">
        <HomeLink to={"/"}>
          <h1>{title}</h1>
        </HomeLink>
        <Nav />
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled("div")`
  background-color: rgba(44, 62, 80);
  .head {
    height: 100%;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const HomeLink = styled(Link)`
  padding: 10px 0;
  color: #fff;
  text-align: center;
  text-decoration: none;
`

export default Header
