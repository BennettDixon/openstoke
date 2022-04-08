import { useState } from 'react'
import Link from 'next/link'
import siteConfig from 'site.config'
import styled from 'styled-components'

import { DrawerToggle, MobileNavMenu } from 'components'
import { funcs } from 'ui-kit'
import { Type } from 'styles'
import { ViewPort } from 'models'

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
`

const Wordmark = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  margin-right: 8px;
  height: 20px;
  width: 20px;
  font-size: ${Type.fontSizes.h3};
`

const Name = styled.span`
  font-weight: ${Type.fontWeights.bold};
`

const NavItems = styled.ul`
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
  transition: opacity 500ms;
  :hover {
    opacity: 0.5;
  }
`

const NavMenu = props => {
  const [navOpen, setNavOpen] = useState(false)
  const viewPort = funcs.getViewPort()
  console.log('got view port....', viewPort)
  const showMobileNavButton = viewPort === ViewPort.mobile

  const toggleNav = e => {
    e?.preventDefault()
    setNavOpen(!navOpen)
  }

  if (showMobileNavButton) {
    console.log('showing mobile nav...')
    return (
      <MobileNavContainer onClick={toggleNav}>
        <DrawerToggle open={navOpen} />
      </MobileNavContainer>
    )
  }
  return (
    <NavItems>
      <NavItem>
        <Link href='/about' passHref>
          <A>About</A>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/faq' passHref>
          <A>FAQ</A>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/guides' passHref>
          <A>Guides</A>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/resources' passHref>
          <A>Links & Resources</A>
        </Link>
      </NavItem>
    </NavItems>
  )
}

const Header = props => (
  <Nav>
    <Link href='/' passHref>
      <A>
        <Wordmark>
          <Logo src='/icons/logo.svg' />
          <Name>{siteConfig.author}</Name>
        </Wordmark>
      </A>
    </Link>
    <NavMenu />
  </Nav>
)

export default Header
