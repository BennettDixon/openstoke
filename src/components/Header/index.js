import { useState } from 'react'
import Link from 'next/link'
import siteConfig from 'site.config'

import * as S from './styles'
import { DrawerToggle, MobileNavMenu } from 'components'
import { funcs } from 'ui-kit'
import { ViewPort } from 'models'
import { navItems } from 'data'

const NavMenu = props => {
  const [navOpen, setNavOpen] = useState(false)
  const viewPort = funcs.getViewPort()
  const showMobileNavButton = viewPort === ViewPort.mobile

  const toggleNav = e => {
    e?.preventDefault()
    setNavOpen(!navOpen)
  }

  if (showMobileNavButton) {
    return (
      <S.MobileNavContainer onClick={toggleNav}>
        <MobileNavMenu open={navOpen} />
        <S.DrawerContainer open={navOpen}>
          <DrawerToggle open={navOpen} />
        </S.DrawerContainer>
      </S.MobileNavContainer>
    )
  }
  return (
    <S.NavItems>
      {navItems.map(item => (
        <S.NavItem>
          <Link href={item.link} passHref>
            <S.A>{item.title}</S.A>
          </Link>
        </S.NavItem>
      ))}
    </S.NavItems>
  )
}

const Header = props => (
  <S.Nav>
    <S.NavLogoLinkContainer>
      <Link href='/' passHref>
        <S.A>
          <S.Wordmark>
            <S.Logo src='/icons/logo.svg' />
            <S.Name>{siteConfig.author}</S.Name>
          </S.Wordmark>
        </S.A>
      </Link>
    </S.NavLogoLinkContainer>
    <NavMenu />
  </S.Nav>
)

export default Header
