import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const RoomPreview = ({ room }) => {
  const { title, content, slug, image } = room
  return (
    <ContainerRoom>
      <Image fluid={image.fluid} />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <Button to={`room/${slug}`}>See room</Button>
      </div>
    </ContainerRoom>
  )
}

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const ContainerRoom = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 2rem;

  h3 {
    font-size: 2.5rem;
    text-transform: capitalize;
    padding-bottom: 5px;
  }
  div {
    padding: 2rem;
  }
`

export default RoomPreview
