import { graphql, useStaticQuery } from "gatsby"

const useRoom = () => {
  //hacemos la consulta
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsRoom {
        nodes {
          title
          content
          slug
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return data.allDatoCmsRoom.nodes.map(room => ({
    title: room.title,
    id: room.id,
    content: room.content,
    image: room.image,
    slug: room.slug,
  }))
}

export default useRoom
