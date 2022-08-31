# Anthane Core Tokens

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

Importing all of the css variables. CSS variables are prefixed with `--p` to signal that these variables are core variables.

```js
import '@anthane/core-tokens/css/styles.css';

div {
  background: var(--p-background);
}
```

#### JSON

Accessing a specific token group file via the dist folder

```js
const spacing = require('@anthane/core-tokens/json/spacing.json');
```
