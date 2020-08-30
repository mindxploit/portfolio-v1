import React from "react"
import styled from "styled-components"

const ContDiv = styled.div`
  width: 85%;
  margin: 0 auto;
  height: ${props => (props.full ? "100vh" : null)};
  @media (max-width: 480px) {
    height: 100%;
    padding-bottom: 4em;
  }
`

const Container = ({ children, full }) => {
  return <ContDiv full={full}>{children}</ContDiv>
}

export default Container
