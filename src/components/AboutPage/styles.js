import styled from 'styled-components'

import { Type } from 'styles'

export const H1 = styled.h1`
  margin-bottom: 20px;
`

export const GitHubButton = styled.a`
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 12px;
  color: black;
  text-decoration: none;
  margin-top: 30px;
  display: grid;
  gap: 14px;
  grid-template-columns: auto auto;
  align-self: flex-start;
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
