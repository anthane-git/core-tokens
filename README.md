# Anthane Core Tokens

[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)](https://npmjs.com/)
[![Node](https://img.shields.io/badge/nodeJS-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Typescript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Rollup](https://img.shields.io/badge/Rollup-ef3335?style=for-the-badge&logo=rollup.js&logoColor=white)](https://rollupjs.org/)

Visual design atoms of the Core design system.

## Installation

```bash
npm install @anthane/core-tokens
```

## Usage

#### Javascript

Accessing all of the available token groups

```js
// Token values only
import { tokens } from '@anthane/core-tokens';

console.log(tokens.colors.background); // 'rgba(246, 246, 247, 1)'

// Tokens with metadata
import { metadata } from '@anthane/core-tokens';

console.log(metadata.colors.background.value); // 'rgba(246, 246, 247, 1)'
console.log(metadata.colors.background.description); // 'For use as a background color, in components such as Page and Frame backgrounds.'
```

#### CSS

Importing all of the css variables. CSS variables are prefixed with `--core` to signal that these variables are core variables.

```js
import '@anthane/core-tokens/css/styles.css';

div {
  background: var(--core-background);
}
```

#### JSON

Accessing a specific token group file via the dist folder

```js
const spacing = require('@anthane/core-tokens/json/spacing.json');
```
