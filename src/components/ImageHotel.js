import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const ImageHotel = () => {
  //con esto hacemos la consulta a graphql para obtener la imagen
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)
  console.log(image.sharp.fluid.srcSetWebp)
  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid}>
      <TextImage>
        <h1>Welcome to the Gatsby Hotel </h1>
        <p>The best hotel for your vacations</p>
      </TextImage>
    </ImageBackground>
  )
}

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`
const TextImage = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 3.5rem;
    }
  }
  p {
    font-size: 2rem;
  }
`

export default ImageHotel
