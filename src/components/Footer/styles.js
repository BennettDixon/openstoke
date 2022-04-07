import styled from 'styled-components'

import { Type } from 'styles'
import GitHub from '../GitHub'

export const Footer = styled.footer`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.rule};
`

export const Copyright = styled.p`
  font-size: ${Type.fontSizes.bodySm};
  display: flex;
  align-items: center;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const StyledGitHub = styled(GitHub)`
  margin-left: 12px;
`

export const A = styled.a`
  &:hover {
    path {
      fill: ${props => props.theme.green10};
    }
  }
`
