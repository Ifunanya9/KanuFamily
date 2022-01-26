import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }

  p {
    line-height: 1.4rem;
  }

  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;

  }

  .btn-primary:hover {
    filter: brightness(1.3);
    border-radius: 7px;
  }

  .btn-change {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 7px;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;

  }

  .btn-change:hover {
    filter: brightness(1.3);
  }

  .background-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};

  }

`;
// #375536

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  primary: '#6200ee',
};

export const darkTheme = {
  // body: '#121212',
  body: '#2c2c30',
  text: '#fff',
  primary: '#bb86fc',
};