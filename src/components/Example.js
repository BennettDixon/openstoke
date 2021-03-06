import styled from 'styled-components'

const ExampleComponent = styled.div`
  color: ${props => props.theme.brand};
`

const Example = props => (
  <ExampleComponent>This is an example component</ExampleComponent>
)

export default Example
