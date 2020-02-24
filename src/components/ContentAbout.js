import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Content } from "../styles/styles"

const ContentAbout = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "about" } }) {
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
  `)
  const { title, content, image } = data.allDatoCmsPage.nodes[0]
  return (
    <Content>
      <h2>{title}</h2>
      <div>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </div>
    </Content>
  )
}

export default ContentAbout
