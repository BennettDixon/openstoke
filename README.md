# openstoke website project

Welcome to the openstoke project. We are dedicated to creating reliable & easily accesibly information regarding open-source one-wheeled balance vehicle devices.

## Contributing to the wiki
Coming soon!

## Contributing your own guides
Coming soon!

## Help with development
The following sections are for people who wish to contribute on a more technical level.

If you're interested in assisting the project from a technical standpoint and have experience with React or NextJS please reach out via discord (link coming soon).

## Getting started

- Node 12.0.0 or greater is required -- 16.13.0 recommended
- NVM is recommended for node version management
  - node `16.3.0` is recommended as that is what is used for development. (`nvm use 16.3.0`)

To start developing the project run the following:
```
nvm use 16.3.0
npm install
npm run dev
```

## Styling components
This project uses `styled-components` to style components by using CSS in JS. [Read more about styled-components here.](https://styled-components.com/)

### Style constants
Check out the [/styles](./src/styles) folder to see constant styles. Please use these styles and add to them when appropriate. This reduces inconsistency across CSS & styles in the app. Here is an example using the `fontSizes` from the `Type` module of our `styles` module.

```javascript
import styled from 'styled-components'

import { Type } from 'styles'

export const MyContainer = styled.div`
  font-size: ${Type.fontSizes.body};
`
```

You can also use the `theme` prop which contains the active theme info (dark and light mode not yet supported but allows us to do so easily in the future):
```javascript
export const LicenseLink = styled.a`
  margin-left: 3px;
  &:hover {
    path {
      fill: ${props => props.theme.brand};
    }
  }
`
```

## Create your own pages (new navigation pages, not blogs etc.)
Coming soon!

## Create your own components
Coming soon!


## Technical details on how the mdx routing works
- `[slug].js` generates static paths using `getStaticPaths` from all `.mdx` files located in the specified directory (`content/` by default).
- The `getStaticProps` NextJS method passes the MDX content including front-matter (parsed with gray-matter) to the `<PostPage />` component to be rendered.
- The index or home page uses similar logic to generate a list of posts sorted by date.

## Goals

Statically generated guides & wiki based on file system within Git repo.

## TODO

- [] Release rough V1
- [] More goals TODO


## License
Project is licensed under MIT license. See [LICENSE.md](LICENSE.md) for more info.