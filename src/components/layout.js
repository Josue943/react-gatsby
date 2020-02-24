import React from "react"
import Header from "./Header"
import Helmet from "react-helmet" //esto lo trae gatsby es para modicar el head
import { Global, css } from "@emotion/core"
import Footer from "./Footer"

const layout = ({ children, seo }) => {
  const {
    siteName,
    fallbackSeo: { description, title },
  } = seo

  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            height: 100%;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            min-height: 100%;
            position: relative;
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT sans", sans-serif;
          }
          h1,
          h2,
          h3 {
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h3 {
            font-family: "PT sans", sans-serif;
          }
          ul {
            list-style: none;
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans|Roboto:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header title={title} />
      {children}
      <Footer title={title} />
    </>
  )
}

export default layout
