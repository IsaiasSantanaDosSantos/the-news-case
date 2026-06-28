import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};

    font-family: ${({ theme }) => theme.typography.fontFamily.sans};

    line-height: ${({ theme }) => theme.typography.lineHeight.normal};

    -webkit-font-smoothing: antialiased;
  }
    html,
body {
  scrollbar-width: none;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
}

  button,
  input,
  textarea,
  select {
    font: inherit;
  }
`;
