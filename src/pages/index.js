import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Container from "../components/container"
import Presentation from "../components/presentation"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container full>
      <Nav />
      <Presentation />
    </Container>
    <Projects />
    <Container>
      <Skills />
      <Contact />
    </Container>
  </Layout>
)

export default IndexPage
