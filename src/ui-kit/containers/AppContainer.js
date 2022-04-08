import styled from 'styled-components'
import { Sizes } from 'styles'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${Sizes.appXPadding};
  min-height: 100vh;
  box-sizing: border-box;
`

export { AppContainer }
export default AppContainer
