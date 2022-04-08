import styled from 'styled-components'
import { Type } from 'styles'

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
`

export const Wordmark = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  margin-right: 8px;
  height: 20px;
  width: 20px;
  font-size: ${Type.fontSizes.h3};
`

export const Name = styled.span`
  font-weight: ${Type.fontWeights.bold};
`

export const NavItems = styled.ul`
  margin-left: auto;
  display: flex;
`

export const A = styled.a`
  text-decoration: none;
  color: ${props => props.theme.text10};

  &:hover {
    color: ${props => props.theme.brand};
  }
`

export const NavItem = styled.li`
  margin-left: 24px;
  list-style-type: none;
`

// change to hamburger button
export const MobileNavContainer = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.brand};
  font-size: ${Type.fontSizes.body};
  font-weight: ${Type.fontWeights.bold};
  margin-left: auto;
  cursor: pointer;
  transition: background 500ms;
`

export const DrawerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
