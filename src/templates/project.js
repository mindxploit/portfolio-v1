import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"

const ProjectWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

const ProjectImage = styled(Img)`
  border-radius: 8px;
  margin: 2rem 0;
`

const ProjectContent = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto 2rem;
  }
`

export default function ProjectTemplate({ data }) {
  const { images } = data
  return (
    <Layout>
      <ProjectWrapper>
        <ProjectContent>
          <h1>GiEXPO - Blockchain Exposition Conference</h1>
          <p>
            Landing page design for GiEXPO, a blockchain conference event hosted
            in Dubai.
          </p>
          {images.edges.map(({ node }, index) => (
            <ProjectImage
              key={index}
              fluid={node.childImageSharp.fluid}
              alt={`GiEXPO Preview ${index + 1}`}
            />
          ))}
        </ProjectContent>
      </ProjectWrapper>
    </Layout>
  )
}
export const query = graphql`
  query {
    images: allFile(
      filter: { relativePath: { regex: "/projects/giexpo(-.*)?.png/" } }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
