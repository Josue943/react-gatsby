import React from "react"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import useSeo from "./hooks/useSeo"

/*hacemos la peticion esa variable fue creada en la ruta */
export const query = graphql`
  query($slug: String!) {
    allDatoCmsRoom(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        image {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
//aqui podemos acceder a la data
const Room = ({
  data: {
    allDatoCmsRoom: { nodes },
  },
}) => {
  const seo = useSeo()
  const { title, content, image } = nodes[0]
  return (
    <Layout seo={seo}>
      <main
        css={css`
          width: 95%;
          max-width: 1200px;
          margin: 30px auto;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
            text-transform: capitalize;
            padding-bottom: 1.5rem;
          `}
        >
          {title}
        </h1>
        <p
          css={css`
            padding-bottom: 2rem;
          `}
        >
          {content}
        </p>
        <Image fluid={image.fluid} />
      </main>
    </Layout>
  )
}

export default Room
