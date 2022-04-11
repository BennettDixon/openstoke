import styled from 'styled-components'

export const PaginationComponent = styled.div``

export const PageNumberContainer = styled.div`
  justify-self: center;
  margin: 0px auto;
`

export const PageNumber = styled.button`
  background-color: ${({ active, theme }) =>
    active ? theme.pastelPurple : theme.text10};
  color: ${({ active, theme }) =>
    active ? theme.background : theme.keyYellow};
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;

  margin: 10px;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.pastelPurple : theme.text10};
  }

  &:focus {
    background-color: ${({ active, theme }) =>
      active ? theme.pastelPurple : theme.text10};
    outline: ${({ theme }) => theme.yellow10};
  }
`
