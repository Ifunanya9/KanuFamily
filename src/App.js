import React from 'react';
import { Content } from './components/pages/Home'
import { Toggle } from './components/layout/Navbar'
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <BrowserRouter>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Content />
      </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
