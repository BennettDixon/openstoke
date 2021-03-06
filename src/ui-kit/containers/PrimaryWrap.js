import styled from 'styled-components'

import { Breakpoints, Sizes } from 'styles'

const PrimaryWrap = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  box-sizing: border-box;
  width: ${Sizes.primaryContainer.desktop};

  @media (max-width: ${Breakpoints.tablet}) {
    width: ${Sizes.primaryContainer.mobile};
  }
`

export { PrimaryWrap }
export default PrimaryWrap
