import Link from 'next/link'
import { navItems } from 'data'
import * as S from './styles'

export default function MobileNavMenu ({ open }) {
  return (
    <S.MobileNavMenu open={open}>
      <S.NavMenuItems>
        {navItems.map(item => (
          <S.NavItem>
            <Link href={item.link} passHref>
              <S.A>{item.title}</S.A>
            </Link>
          </S.NavItem>
        ))}
      </S.NavMenuItems>
    </S.MobileNavMenu>
  )
}
