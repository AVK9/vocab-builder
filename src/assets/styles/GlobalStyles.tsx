import fixelDisplayBold from '../fonts/FixelDisplay-Bold.otf';
import fixelDisplayMedium from '../fonts/FixelDisplay-Medium.otf';
import fixelDisplayRegular from '../fonts/FixelDisplay-Regular.otf';
import fixelDisplaySemiBold from '../fonts/FixelDisplay-SemiBold.otf';
import sfProDisplayLight from '../fonts/sf-pro-display-light.otf';
import sfProDisplayRegular from '../fonts/sf-pro-display-regular.otf';

import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --black: #121417;
  --green: #85aa9f;
  --green-hov: #a5c0b8;
  --white: #fcfcfc;
  --white-1: #f8f8f8;
  --font-family: "MacPaw Fixel Display", sans-serif;
  --second-family: "SF Pro Display", sans-serif;
}

html,
body {
      font-weight: 400;
      font-style: normal;
      width: 100%;
      margin: 0;
      line-height: 1;
      scroll-behavior: smooth;
    }

html[data-theme='light'] {
  --black: #121417;
  --green: #85aa9f;
  --white: #fcfcfc;
  --white-1: #f8f8f8;
}

html[data-theme='dark'] {
  --black: #f8f8f8;
  --green: #85aa9f;
  --white: #121417;
  --white-1: #121417;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
main {
  flex-grow: 1;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
      margin: 0;
    }
a {
      color: inherit;
      text-decoration: none;
    }
ul,
ol {
      list-style: none;
      padding: 0;
      margin: 0;
    }
img {
      display: block;
      max-width: 100%;
      height: auto;
    }
button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    }


@font-face {
      font-family: 'MacPaw Fixel Display';
      font-weight: 700;
      font-style: normal;
      src: url(${fixelDisplayBold}) format('opentype');
      font-display: swap;
    }
@font-face {
      font-family: 'MacPaw Fixel Display';
      font-weight: 500;
      font-style: normal;
      src: url(${fixelDisplayMedium}) format('opentype');
      font-display: swap;
    }

@font-face {
      font-family: 'MacPaw Fixel Display';
      font-weight: 400;
      font-style: normal;
      src: url(${fixelDisplayRegular}) format('opentype');
      font-display: swap;
    }

@font-face {
      font-family: 'MacPaw Fixel Display';
      font-weight: 400;
      font-style: normal;
      src: url(${fixelDisplaySemiBold}) format('opentype');
      font-display: swap;
    }

@font-face {
      font-family: 'SF Pro Display';
      font-weight: 400;
      font-style: normal;
      src: url(${sfProDisplayLight}) format('opentype');
      font-display: swap;
    }
@font-face {
      font-family: 'SF Pro Display';
      font-weight: 400;
      font-style: normal;
      src: url(${sfProDisplayRegular}) format('opentype');
      font-display: swap;
    }


    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #85aa9f;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }

    * {
      scrollbar-color: #85aa9f rgba(239, 237, 232, 0.1);
    }
`;
