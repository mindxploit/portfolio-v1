import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
  }
  
  * {
      box-sizing: border-box;
  }

  body {
    background-color: #121212;
    color: white;
    font-family: 'Open Sans';
  }

`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      {children}
    </React.Fragment>
  )
}
