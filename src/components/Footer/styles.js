import styled from 'styled-components'

import { Breakpoints, Sizes, Type } from 'styles'
import GitHub from '../GitHub'

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  width: ${Sizes.primaryContainer.desktop};
  border-top: 1px solid ${props => props.theme.rule};
  margin-bottom: 5px;

  @media (max-width: ${Breakpoints.tablet}) {
    width: calc(${Sizes.primaryContainer.mobile} - (${Sizes.appXPadding} * 2));
  }
`

export const Copyright = styled.p`
  font-size: ${Type.fontSizes.bodySm};
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 10px;
`

export const LicenseContainer = styled.div`
  font-size: ${Type.fontSizes.bodySm};
  margin: 0;
  display: flex;
  flex-direction: row;
`

export const License = styled.p`
  font-size: ${Type.fontSizes.bodySm};
  margin: 0;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
  margin-left: auto;
`

export const StyledGitHub = styled(GitHub)``

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
