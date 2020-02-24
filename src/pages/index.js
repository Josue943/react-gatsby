import React from "react"
import Layout from "../components/Layout"
import ImageHotel from "../components/ImageHotel"
import ContentHome from "../components/ContentHome"
import useRoom from "../components/hooks/useRoom"
import useSeo from "../components/hooks/useSeo"
import RoomPreview from "../components/RoomPreview"
import styled from "@emotion/styled"

const IndexPage = () => {
  const rooms = useRoom()
  const seo = useSeo()
  return (
    <Layout seo={seo}>
      <ImageHotel />
      <ContentHome />
      <Rooms>
        <h2>Our Rooms</h2>
        <List>
          {rooms.map(room => (
            <RoomPreview room={room} key={room.id} />
          ))}
        </List>
      </Rooms>
    </Layout>
  )
}

const Rooms = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 30px auto;
  h2 {
    text-align: center;
    padding-bottom: 30px;
  }
`

const List = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 4rem;
  }
`

export default IndexPage
