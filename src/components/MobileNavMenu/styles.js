import styled from 'styled-components'

export const MobileNavMenu = styled.div`
  position: absolute;
  transition: all 500ms;
  top: ${props => (props.open ? '0' : '-100%')};
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.brand};
`
