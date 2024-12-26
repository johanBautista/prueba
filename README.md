# it-app

This template should help get you started developing with Vue 3 in Vite.

### Next Steps

The following improvements are planned for this project:

- Organize Project Structure:
  -- Separate the codebase into feature-specific folders (e.g., customers, products) to improve maintainability and clarity.

- API Call Refactoring:
  -- Consolidate API calls using a centralized store (e.g., Pinia or Vuex).
  -- Avoid redundant calls by caching data in the store.
  -- Implement data filtering through mutations/actions for better performance and reusability.

- CSS Optimization:
  -- Refactor the CSS codebase to remove redundancy and follow a consistent design system. This will improve maintainability and scalability.

- Testing:
  -- Create a comprehensive suite of unit tests using Vitest to validate individual components and functions.
  -- Develop integration and E2E tests with Cypress to ensure the application works seamlessly in real-world scenarios.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
