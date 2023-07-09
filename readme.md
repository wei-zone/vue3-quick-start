# vue3-quick-start

This template should help get you started developing with Vue 3 in Vite.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 配置

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 开始

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

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

This runs the end-to-end tests against the Vite development server. It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## 移动端调试

[eruda](https://github.com/liriliri/eruda)

开启方式

链接后添加`?debug=true`

如：[http://127.0.0.1:5000/?debug=true](http://127.0.0.1:5000/?debug=true)
