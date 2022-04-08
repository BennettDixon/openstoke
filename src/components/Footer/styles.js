import styled from 'styled-components'

import { Sizes, Type } from 'styles'
import GitHub from '../GitHub'

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  height: 70px;
  display: flex;
  align-items: center;
  width: ${Sizes.primaryContainer.desktop};
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
      fill: ${props => props.theme.brand};
    }
  }
`

export const LicenseLink = styled.a`
  margin-left: 3px;
  &:hover {
    path {
      fill: ${props => props.theme.brand};
    }
  }
`
