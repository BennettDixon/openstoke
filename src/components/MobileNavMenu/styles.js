import styled from 'styled-components'
import { ZIndex } from 'styles'

export const MobileNavMenu = styled.div`
  z-index: ${ZIndex.zHigh};
  position: absolute;
  transition: all 300ms;
  top: 0;
  left: ${props => (props.open ? '0' : '-100%')};
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.brand};
`
