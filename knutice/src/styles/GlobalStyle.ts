import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    font-family: Pretendard;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  body {
    margin: 0;
    min-height: 100vh;
    line-height: 1.5;
  }

  html, body {
    overscroll-behavior: none;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  button,
  input,
  label {
    line-height: 1.34;
  }

  h1,
  h2,
  h3,
  h4 {
    text-wrap: balance;
    white-space: pre-wrap;
    word-wrap: break-word; /* IE 5.5-7 */
    white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    white-space: pre-wrap;
    word-wrap: break-word; /* IE 5.5-7 */
    white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
    text-decoration: none;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  textarea:not([rows]) {
    min-height: 10em;
  }

  :target {
    scroll-margin-block: 5ex;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
