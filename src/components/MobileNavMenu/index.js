import Link from 'next/link'
import { navItems } from 'data'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

export default function MobileNavMenu ({ closeNav, open }) {
  const router = useRouter()
  const handleClick = (e, item) => {
    e?.preventDefault()
    router.push(item.link)
    closeNav()
  }
  return (
    <S.MobileNavMenu open={open}>
      <S.NavMenuItems>
        {navItems.map(item => (
          <S.NavItem>
            <S.A onClick={e => handleClick(e, item)}>{item.title}</S.A>
          </S.NavItem>
        ))}
      </S.NavMenuItems>
    </S.MobileNavMenu>
  )
}
