import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { AiFillGithub } from "react-icons/ai"
import { BiLinkExternal } from "react-icons/bi"
import { motion } from "framer-motion"
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
    }
  `)

  return (
    <Wrapper id="works">
      <Fade bottom>
        <Title>My projects</Title>
      </Fade>
      <Fade bottom>
        <Card>
          <Img fluid={data.imageChord.childImageSharp.fluid} />
          <Text>
            <h2>Easy Chord</h2>
            <p>
              A web application that helps musicians in the process of making
              chord progressions.
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
      <Fade bottom>
        <Card>
          <Img fluid={data.imageVpn.childImageSharp.fluid} />
          <Text>
            <h2>Lasles VPN</h2>
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
      <Fade bottom>
        <Card>
          <Img fluid={data.imageMovie.childImageSharp.fluid} />
          <Text>
            <h2>Movie Watchlist</h2>
            <p>Find any movie and create your custom watchlist.</p>
            <Tech>
              <p>react-js</p>
              <p>material-ui</p>
              <p>TMDb Api</p>
            </Tech>
            <a
              rel="noreferrer"
              href="https://github.com/mindxploit/movie-watchlist"
              target="_blank"
            >
              <AiFillGithub size="2em" />
            </a>
            <a
              rel="noreferrer"
              href="https://mindxploit.github.io/movie-watchlist/"
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
