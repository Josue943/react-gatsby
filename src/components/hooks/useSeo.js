import { useStaticQuery, graphql } from "gatsby"

const useSeo = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          titleSuffix
          siteName
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)
  return data.datoCmsSite.globalSeo
}

export default useSeo
