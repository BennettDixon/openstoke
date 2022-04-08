import styled from 'styled-components'
import { Sizes, Type, ZIndex } from 'styles'

export const MobileNavMenu = styled.nav`
  z-index: ${ZIndex.zHigh};
  position: absolute;
  transition: all 300ms;
  top: 0;
  left: ${props => (props.open ? '0' : '-100%')};
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.background};
  padding: 80px ${Sizes.appXPadding};
  box-sizing: border-box;
`

export const NavMenuItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-left: 15px;
`

export const NavItem = styled.li`
  text-align: left;
  margin: 20px 0px;
  font-size: ${Type.fontSizes.bodyLg};
`

export const A = styled.a`
  color: ${props => props.theme.text10};

  &:hover {
    color: ${props => props.theme.brand};
  }
`
