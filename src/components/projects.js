import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { AiFillGithub } from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi"
import Fade from "react-reveal/Fade"

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 5em 7.5%;
`

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 0;
  margin-bottom: 2em;
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`

const Card = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3em;
  .gatsby-image-wrapper {
    width: 55%;
    min-width: 55%;
    border-radius: 5px;
  }
  @media (max-width: 740px) {
    flex-direction: column;
    margin-bottom: 5em;
    .gatsby-image-wrapper {
      width: 100%;
    }
    gap: 2rem;
  }
`

const Text = styled.div`
  text-align: right;
  width: 100%;
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
  }

  a {
    cursor: pointer;
    margin-left: 0.5em;
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      color: white;
    }
  }

  @media (min-width: 800px) {
    margin-left: 1em;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`

const ProjectName = styled.a`
  font-size: 2.2rem;
  font-weight: 600;

  @media (max-width: 400px) {
    a {
      font-size: 2rem;
    }
  }

  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Tech = styled.div`
  font-family: "Fira Mono";
  display: flex;
  justify-content: flex-end;
  p {
    margin-left: 1em;
    font-size: 1rem;
  }
  @media (min-width: 800px) {
    margin-top: 4em;
    p {
      margin-left: 2em;
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query Images {
      imageMovie: file(relativePath: { eq: "projects/movie.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageChord: file(relativePath: { eq: "projects/easychord.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageVpn: file(relativePath: { eq: "projects/laslesvpn.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageKosko: file(relativePath: { eq: "projects/kosko.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageMorocco: file(relativePath: { eq: "projects/moroccoAtlantis.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageGiexpo: file(relativePath: { eq: "projects/giexpo.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="works">
      <Fade bottom>
        <Title>Latest works</Title>
      </Fade>
      <Fade bottom>
        <Card>
          <Img fluid={data.imageMorocco.childImageSharp.fluid} />
          <Text>
            <ProjectName
              rel="noreferrer"
              href="https://moroccoatlantisjourneys.com/"
              target="_blank"
            >
              Morocco Atlantis Journeys
            </ProjectName>
            <p>
              Business website for an experiences and tours provider in Morocco.
            </p>
            <Tech>
              <p>webflow</p>
              <p>brand identity</p>
              <p>multi-lang</p>
              <p>seo</p>
            </Tech>
            <a
              rel="noreferrer"
              href="https://moroccoatlantisjourneys.com/"
              target="_blank"
            >
              <BiLinkExternal size="2em" />
            </a>
          </Text>
        </Card>
      </Fade>
      <Fade bottom>
        <Card>
          <Img fluid={data.imageKosko.childImageSharp.fluid} />
          <Text>
            <ProjectName
              rel="noreferrer"
              href="https://www.kosko.it/"
              target="_blank"
            >
              KOSKO
            </ProjectName>
            <p>
              MVP of Kosko, a platform that enables you to create better teams
              through the analysis of personality.{" "}
            </p>
            <Tech>
              <p>react-js</p>
              <p>chart.js</p>
              <p>graphql</p>
              <p></p>
            </Tech>
            <a rel="noreferrer" href="https://www.kosko.it/" target="_blank">
              <BiLinkExternal size="2em" />
            </a>
          </Text>
        </Card>
      </Fade>
      <Fade bottom>
        <Card>
          <Img fluid={data.imageGiexpo.childImageSharp.fluid} />
          <Text>
            <ProjectName
              rel="noreferrer"
              href="https://dribbble.com/shots/24804301-GiEXPO-Blockchain-Exposition-Conference?utm_source=Clipboard_Shot&utm_campaign=mindxploit&utm_content=GiEXPO%20-%20Blockchain%20Exposition%20Conference&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=mindxploit&utm_content=GiEXPO%20-%20Blockchain%20Exposition%20Conference&utm_medium=Social_Share"
              target="_blank"
            >
              GiEXPO
            </ProjectName>
            <p>Landing page design for blockchain event. </p>
            <Tech>
              <p>figma</p>
              <p>ui design</p>
            </Tech>
            <a
              rel="noreferrer"
              href="https://dribbble.com/shots/24804301-GiEXPO-Blockchain-Exposition-Conference?utm_source=Clipboard_Shot&utm_campaign=mindxploit&utm_content=GiEXPO%20-%20Blockchain%20Exposition%20Conference&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=mindxploit&utm_content=GiEXPO%20-%20Blockchain%20Exposition%20Conference&utm_medium=Social_Share"
              target="_blank"
            >
              <BiLinkExternal size="2em" />
            </a>
          </Text>
        </Card>
      </Fade>
      <Fade bottom>
        <Fade bottom>
          <Card>
            <Img fluid={data.imageChord.childImageSharp.fluid} />
            <Text>
              <ProjectName
                rel="noreferrer"
                href="https://mindxploit.github.io/EasyChord/"
                target="_blank"
              >
                Easy Chord
              </ProjectName>
              <p>
                A web application that helps musicians in the process of
                learning music theory and chord progressions.
              </p>
              <Tech>
                <p>figma</p>
                <p>react-js</p>
              </Tech>
              <a
                rel="noreferrer"
                href="https://github.com/mindxploit/EasyChord"
                target="_blank"
              >
                <AiFillGithub size="2em" />
              </a>
              <a
                rel="noreferrer"
                href="https://mindxploit.github.io/EasyChord/"
                target="_blank"
              >
                <BiLinkExternal size="2em" />
              </a>
            </Text>
          </Card>
        </Fade>
        <Card>
          <Img fluid={data.imageVpn.childImageSharp.fluid} />
          <Text>
            <ProjectName
              rel="noreferrer"
              href="https://github.com/mindxploit/lasles-vpn-landing-page"
              target="_blank"
            >
              Lasles VPN
            </ProjectName>
            <p>From UI design to fully responsive static landing page.</p>
            <Tech>
              <p>html</p>
              <p>css</p>
              <p>react-reveal</p>
            </Tech>
            <a
              rel="noreferrer"
              href="https://github.com/mindxploit/lasles-vpn-landing-page"
              target="_blank"
            >
              <AiFillGithub size="2em" />
            </a>
            <a
              rel="noreferrer"
              href="https://mindxploit.github.io/lasles-vpn-landing-page/"
              target="_blank"
            >
              <BiLinkExternal size="2em" />
            </a>
          </Text>
        </Card>
      </Fade>
    </Wrapper>
  )
}

export default Projects
