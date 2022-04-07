# openstoke website project

Welcome to the openstoke project. We are dedicated to creating reliable & easily accesibly information regarding open-source one-wheeled balance vehicle devices.

## Contributing to the wiki
Coming soon!

## Contributing your own guides
Coming soon!

## Getting started

- Node 12.0.0 or greater is required -- 16.13.0 recommended
- NVM is recommended for node version management
  - node `16.3.0` is recommended as that is what is used for development. (`nvm use 16.3.0`)

To start developing the project run the following:
```
npm install
npm run dev
```

## Styling components
This project uses `styled-components` to style components by using CSS in JS. [Read more about styled-components here.](https://styled-components.com/)

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