import styled, { css } from 'styled-components'
import { Exit } from 'icons'

import { Breakpoints, Type } from 'styles'

export const H1 = styled.h1`
  margin-bottom: 20px;
`

export const H2 = styled.h2`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 100px;
  color: ${props => props.theme.text20};
`

export const FeatureList = styled.ul`
  margin: 8px 0 0 0;
  padding: 0 0 0 30px;
`

export const ListItem = styled.li`
  font-size: ${Type.fontSizes.body};
  margin-bottom: 16px;
  color: ${props => props.theme.text20};
`

export const PostList = styled.ul`
  margin: 22px 0 0 0;
  padding: 0;
  list-style-type: none;
`

export const PostListItem = styled.li`
  margin-bottom: 30px;
`

export const HideOnEntry = styled.div`
  @keyframes hide {
    from {
      height: 100%;
      top: 0px;
    }
    to {
      height: 0px;
      top: -150vh;
    }
  }

  ${({ hasEntered }) =>
    hasEntered &&
    css`
      height: 0px;
      animation: hide 750ms;
      animation-fill-mode: forwards;
    `}

  position: relative;
  display: flex;
  flex-direction: column;
`

export const MDXWrap = styled.div`
  padding: 20px 0px;
  padding-top: 45px;
`

const brandRect = css`
  rect {
    fill: ${({ theme }) => theme.brand};
  }
`

export const StyledExit = styled(Exit)`
  @keyframes blinkYellow {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.5;
    }
  }

  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;

  width: 30px;
  height: 30px;

  rect {
    fill: ${({ theme }) => theme.text10};
  }

  @media (max-width: ${Breakpoints.mobile}) {
    right: 15px;
    top: 15px;
  }

  :hover {
    ${brandRect}
    animation: blinkYellow 1s infinite alternate;
  }

  :focus {
    ${brandRect}
    animation: blinkYellow 1s infinite alternate;
    outline: none;
  }
`

export const MDXContainer = styled.div`
  @keyframes hideAbove {
    from {
      height: 100%;
      top: 0px;
      opacity: 1;
    }
    to {
      height: 0px;
      top: -150vh;
      opacity: 0;
    }
  }

  @keyframes bringDown {
    from {
      opacity: 0;
      height: 0;
      top: -150vh;
    }
    to {
      opacity: 1;
      height: 100%;
      top: 0px;
    }
  }

  margin: 20px;

  position: relative;

  ${props =>
    props.enteringMdx &&
    css`
      animation: bringDown 750ms;
      animation-fill-mode: forwards;
    `}

  ${props =>
    props.hidingMdx &&
    css`
      animation: hideAbove 750ms;
      animation-fill-mode: forwards;
    `}
`

export const H3 = styled.h3``

export const Text = styled.p``

export const Spacer = styled.div`
  margin: 20px 0;
`
