import * as S from './styles'

export default function DrawerToggle ({ open, fill, ...rest }) {
  return (
    <S.DrawerToggleComponent
      fill={fill}
      open={open}
      aria-label='open navigation menu'
    >
      <div />
      <div />
      <div />
    </S.DrawerToggleComponent>
  )
}
