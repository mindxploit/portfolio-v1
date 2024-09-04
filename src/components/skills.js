import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 1em 0;
  @media (max-width: 480px) {
    font-size: 3rem;
    margin-top: 0;
  }
`

const Block = styled.div`
  @media (max-width: 900px) {
    padding: 1em 3em;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    margin-bottom: 2em;
    padding: 0.5em;
  }
`

const FlexWrap = styled.div`
  padding-top: 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Skills = () => {
  return (
    <>
      <FlexWrap>
        <Fade left cascade>
          <Title>Skills</Title>
        </Fade>
        <Fade bottom cascade>
          <Block>
            <h2>Coding</h2>
            <p>Javascript (ES6) / Typescript</p>
            <p>Solidity</p>
            <p>Webflow</p>
            <p>HTML/CSS</p>
            <p>Graphql</p>
            <p>Git & Github</p>
          </Block>
          <Block>
            <h2>Frameworks</h2>
            <p>React.js</p>
            <p>Next.js</p>
            <p>Material-ui</p>
            <p>Chakra-ui</p>
            <p>Styled-components</p>
            <p>Bootstrap</p>
            <p>Tailwind css</p>
            <p>Gatsby.js</p>
            <p>p5.js</p>
          </Block>
          <Block>
            <h2>Design</h2>
            <p>Photoshop</p>
            <p>Illustrator</p>
            <p>Figma</p>
          </Block>
          <Block>
            <h2>Interested in</h2>
            <p>Crypto and DeFi</p>
            <p>Cyber Security</p>
            <p>AI</p>
          </Block>
        </Fade>
      </FlexWrap>
    </>
  )
}

export default Skills
