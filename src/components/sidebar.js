import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import config from "../config/"

import Theme from "../styles/Theme"

const { navLinks } = config
const { colors, borderRadius, breakpoints } = Theme

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
  transition: all 0.3s ease-in-out;
  display: ${({ open }) => (open ? "block" : "none")};
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const StyledContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  outline: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.background};
  height: 100vh;
  width: 70%;
  text-align: left;
  padding: 2rem;
  position: relative;
  right: 0;
  margin-left: auto;
  a {
    color: ${colors.primary};
  }
`

const StyledNavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  padding: 1.5rem 0;
`

const StyledButton = styled(Link)`
  width: auto;
  height: auto;
  margin: 1.5rem auto;
  padding: 1rem 1.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: ${borderRadius};
  border: 0.125rem solid ${colors.primary};
  background: ${colors.background};
`

const Sidebar = ({ open, setOpen }) => {
  const { menu, button } = navLinks
  return (
    <>
      <StyledContainer open={open} aria-hidden={!open} tabIndex={open ? 1 : -1}>
        <StyledNav>
          {menu.map(({ name, url }, key) => (
            <StyledNavLink key={key} to={url} onClick={() => setOpen(!open)}>
              {name}
            </StyledNavLink>
          ))}
          <StyledButton to={button.url} onClick={() => setOpen(!open)}>
            {button.name}
          </StyledButton>
        </StyledNav>
      </StyledContainer>
      <StyledBackdrop open={open} />
    </>
  )
}

export default Sidebar