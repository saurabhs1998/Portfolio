import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import "typeface-roboto"

import Context from "../context/"
import Theme from "../styles/Theme"
import GlobalStyle from "../styles/GlobalStyle"

import Header from "./header"
import Footer from "./footer"

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

const Layout = ({ children }) => {
  const [state, setState] = useState({
    isIntroDone: false,
  })
  return (
    <StyledLayoutWrapper>
      <Context.Provider value={{ state, setState }}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </Context.Provider>
    </StyledLayoutWrapper>
  )
}

export default Layout
