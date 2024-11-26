# Stock Market App

## Stack: React + TypeScript + Vite

## Code Structure:

src
|-- API
|-- assets
|-- fonts
|-- images
|-- components
|-- button
|-- Button.tsx
|-- styles.module.scss/css
|-- hooks
|-- context
|-- config
|-- constants
|-- utils
|-- intl
|-- services
|-- store
|-- styles
|-- types
|-- views
|-- Routes

The high-level folders contain all the shared code (i.e.: design system components, utils, styles base, ...etc). The views/features folder contains a folder for each feature and it's structured like the top level, meaning that each view/folder contains its encapsulated routes, utils, components, ...etc.

## Linting and formatting:

To ensure (consistent)code quality eslint, prettier, and husky(pre-commit hooks) are added to the project.

## CI/CD:

Runs test cases and lints on a PR before merging to ensure we don't have problems with production. Each env(staging production) should have its configuration.

## Testing:

Unit testing with react testing library: tests that the app renders correctly and small units/logic functionality.etc
E2E testing with Cypress: tests user flow to ensure that applications behave as expected and that the flow of data is maintained. We can stub API calls, spy on functions to test the output in different cases(i.e.: loading, error,...etc), and ensure that the content is rendered correctly on a page, ...etc.

## Performance metrics:

## Running The app:

- `npm install`
- `npm run dev`
