# Anthane Core Tokens

[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)](https://npmjs.com/)
[![Style Dictionary](https://img.shields.io/badge/Style%20Dictionary-1FC5BF?style=for-the-badge&logo=Steemit&logoColor=white)](https://amzn.github.io/style-dictionary/)
[![Node](https://img.shields.io/badge/nodeJS-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)

Core Tokens uses Style Dictionary as the build system that allows us to define styles once, in a way for any platform or language to consume.

## Supports

CSS, SCSS, Javascript, typescript.

## Installation

```bash
npm install @anthane/core-tokens
```

## Usage

#### TypeScript/JavaScript

Accessing all of the available token groups

```js
import { colors } from '@anthane/core-tokens';

console.log(colors.light.ActionErrorDefault);
```

#### CSS/SCSS

Importing all of the css variables. CSS variables are prefixed with `--core` to signal that these variables are core variables.

```scss
@use '@anthane/core-tokens/scss/index' as *;

div {
background: var(--core-color-background);
}
```
