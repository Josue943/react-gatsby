import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image" //ya viene en el paquete
import { Content } from "../styles/styles"

const ContentHome = () => {
  //traemos la data
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const { title, content, image } = data.allDatoCmsPage.nodes[0]
  /* console.log(data.allDatoCmsPage.nodes[0]) */
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

export default ContentHome
