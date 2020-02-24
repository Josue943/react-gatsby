exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `)
  //si hay errores
  if (result.errors) {
    reporter.panic("Not found", result.errors)
  }
  //si todo sale bien
  const rooms = result.data.allDatoCmsRoom.nodes
  rooms.forEach(item => {
    actions.createPage({
      path: `room/${item.slug}`,
      //componente
      component: require.resolve("./src/components/Room.js"),
      context: {
        /*esto crea una variable para el contenido se cargue */
        slug: item.slug,
      },
    })
  })
}
