<div align="center">
  <a href="https://www.styled-components.com">
    <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="150px" />
  </a>
</div>

<br />

<div align="center">
  <h1>Styled Components Toolset</h1>
  <strong>Made to use with styled-components</strong>
  <br />
  <br />
  <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e">
</div>

# Styled components toolset

A cool library to reduce code duplicity inside styled-components

# Motivation

I saw those helpers inside a code from a friend of mine and he explained me the idea and i thinked why not implementing in a better way using better typing, functional patters using Ramda and Big.JS for safer math?

He already has a library with all of those helpers but has many more that i think that is not too helpful only for styled.

Thats why i created this library

# Docs

## Theme that is being used

Thats the theme that is used for all the examples

```ts
const theme = {
	white: '#fff',
	grey: '#eee',
};
```

## Get Theme

Get theme gets a value from the theme object

```ts
import { getTheme } from 'styled-toolset'
import styled from 'styled-components'

const white = getTheme('white')

const Wrapper = styled.div`
  background-color: `${white}`
`;
```

## Get Property

Gets a property value from props and return it

```ts
import { getProperty } from 'styled-toolset';
import styled from 'styled-components';

const padding = getProperty('padding');

const Wrapper = styled.div<{ padding: number }>`
	padding: ${padding}px;
`;
```

## Conditional Style

Gets a property value and check if its true of false and select what to render

### Using with plain values

```ts
import { conditionalStyle } from 'styled-toolset'
import styled from 'styled-components'

const padding = conditionalStyle('disabled')

const Wrapper = styled.div<{ disabled: boolean }>`
  background-color: `${conditionalStyle('#fff', '#eee')}`
`;
```

### Using with theme variables

```ts
import { conditionalStyle } from 'styled-toolset'
import styled from 'styled-components'

const padding = conditionalStyle('disabled')
const white = getTheme('black')
const grey = getTheme('grey')

const Wrapper = styled.div<{ disabled: boolean }>`
  background-color: `${conditionalStyle(white, grey)}`
`;
```

## PX to REM

A converter from pixes to rem. This is a bonus!

```ts
import { pxToRem } from 'styled-toolset'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: `${pxToRem(10)}`
`;
```

# Contributing

To contribute simply open a fork of this repo make the changes and open a pull request of your fork following our templates and passing the github actions workflows and also bumping to the latest version

# Honorable Mentions

<a href="https://github.com/ammichael">
  <img src="https://avatars.githubusercontent.com/u/6873880?s=120&v=4" style="border-radius: 50%;" />
</a>
