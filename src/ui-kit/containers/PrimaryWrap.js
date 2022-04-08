import styled from 'styled-components'

import { Sizes } from 'styles'

const PrimaryWrap = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  box-sizing: border-box;
  width: ${Sizes.primaryContainer.desktop};
`

export { PrimaryWrap }
export default PrimaryWrap
