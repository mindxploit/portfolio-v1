import React from "react"
import styled from "styled-components"
import { FiInstagram } from "react-icons/fi"
import { AiFillGithub } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import Fade from "react-reveal/Fade"

const Main = styled.div`
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  align-items: left;

  p {
    font-family: "Fira Mono";
    font-size: 1.5em;
    margin: 0 0 0 6px;
    color: rgba(255, 255, 255, 0.8);
  }

  h1 {
    font-size: 6rem;
    margin: 0;
  }

  h2 {
    max-width: 777px;
    font-size: 2rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.87);
  }

  span {
    font-weight: normal;
  }
`

const IconsWrapper = styled.div`
  a {
    color: rgba(255, 255, 255, 0.8);
    trasition: 0.2s;
    transition-timing-function: ease-in;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`

const Presentation = () => {
  return (
    <>
      <Main>
        <Fade left cascade duration={200}>
          <p>Hello, my name is</p>
        </Fade>
        <Fade duration={1500} delay={500}>
          <h1>Nicola Bobbo.</h1>
        </Fade>
        <Fade delay={1500} duration={2000}>
          <h2>
            I’m a <span>web developer</span> with a passion for design and
            creative coding.
          </h2>
        </Fade>
      </Main>
      <Fade delay={2000} duration={3000}>
        <IconsWrapper>
          <a href="https://github.com/mindxploit">
            <AiFillGithub size="2em" style={{ marginRight: 20 }} />
          </a>
          <a href="#">
            <FiInstagram size="2em" style={{ marginRight: 20 }} />
          </a>
          <a href="mailto:bobbonicola@gmail.com">
            <FiMail size="2em" style={{ marginRight: 20 }} />
          </a>
        </IconsWrapper>
      </Fade>
    </>
  )
}

export default Presentation
