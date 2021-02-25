# awesome-cards

> Everyone needs a card for their project

[![NPM](https://img.shields.io/npm/v/awesome-cards.svg)](https://www.npmjs.com/package/awesome-cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save awesome-cards
```

## Usage

```jsx
import React, { Component } from 'react'

import { RoundCarousel } from 'awesome-cards'
import 'awesome-cards/dist/index.css'

export const MyComponent = () => {
  const props = {
    /* see props section below */
  }

  return <RoundCarousel {...props} />
}
```

## Props

| Prop    | Default Value           | Type   | Description                                   |
| ------- | ----------------------- | ------ | --------------------------------------------- |
| `list`  | []                      | array  | array of objects with title, picture and text |
| `width` | `500px`                 | string | circule width                                 |
| `timer` | `"2000"`                | number | time to pass from one picture to next picture |
| `color` | array of 12 blue colors | array  | array of 12 colors                            |
|         |

## License

MIT © [rubenperezf](https://github.com/rubenperezf)

## License

MIT © [rubenperezf](https://github.com/rubenperezf)
