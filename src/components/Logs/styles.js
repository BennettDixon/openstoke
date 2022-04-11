import styled from 'styled-components'

export const LogsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Log = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  border-bottom: 1px solid ${props => props.theme.background20};
`

export const Title = styled.a`
  cursor: pointer;
  font-family: 'Lilita One';
  font-size: 24px;
`

export const Readmore = styled.a`
  cursor: pointer;
  font-family: 'Lato';
  font-size: 14px;
  margin-bottom: 20px;
`

export const Date = styled.p`
  color: ${props => props.theme.pastelPurple};
`

export const Description = styled.p``
