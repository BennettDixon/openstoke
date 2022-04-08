import styled from 'styled-components'

import { Breakpoints, Sizes } from 'styles'

const PrimaryWrap = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  box-sizing: border-box;
  width: ${Sizes.primaryContainer.desktop};

  @media (max-width: ${Breakpoints.mobile}) {
    width: ${Sizes.primaryContainer.mobile};
  }
`

export { PrimaryWrap }
export default PrimaryWrap
