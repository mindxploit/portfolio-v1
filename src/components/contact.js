import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Fade from "react-reveal/Fade"

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`

const Desc = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.87);
  text-align: ${props => props.center && "center"};
  @media (min-width: 700px) {
    text-align: center;
  }
`
const Btn = styled.button`
  font-family: "Fira Mono";
  padding: 1em 2em;
  border: none;
  margin: 0 1em;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`

const ButtonFlex = styled.div`
  display: flex;
  justify-content: center;
`
const Wrap = styled.div`
  padding: 25% 0;
`

const Contact = () => {
  return (
    <Wrap id="contact">
      <Fade bottom>
        <Title>Reach out</Title>
        <Desc center>
          I'm currently open to new opportunities and projects to work on.
        </Desc>
        <Desc center>Feel free to get in touch.</Desc>
        <ButtonFlex>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a href="mailto:bobbonicola@gmail.com">
              <Btn>Contact</Btn>
            </a>
          </motion.div>
        </ButtonFlex>
      </Fade>
    </Wrap>
  )
}

export default Contact
