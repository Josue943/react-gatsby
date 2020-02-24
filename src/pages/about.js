import React from "react"
import Layout from "../components/Layout"
import ContentAbout from "../components/ContentAbout"
import useSeo from "../components/hooks/useSeo"

const About = () => {
  const seo = useSeo()
  return (
    <Layout seo={seo}>
      <ContentAbout />
    </Layout>
  )
}

export default About
