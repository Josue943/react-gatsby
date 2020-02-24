import React from "react"
import Nav from "./Nav"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Footer = ({ title }) => {
  const year = new Date().getFullYear()
  return (
    <FooterContainer>
      <HeaderContainer>
        <div className="head">
          <Nav />
          <HomeLink to={"/"}>
            <h1>{title}</h1>
          </HomeLink>
        </div>
      </HeaderContainer>
      <p
        css={css`
          background-color: rgba(44, 62, 80);
          color: #fff;
          text-align: center;
          font-family: "PT Sans", sans-serif;
        `}
      >
        Hotel Gatsby.All rights reserved to {year}
      </p>
    </FooterContainer>
  )
}

const HeaderContainer = styled("div")`
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
const FooterContainer = styled.div`
  background-color: rgba(44, 62, 80);
  width: 100%;
`

const HomeLink = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

export default Footer
