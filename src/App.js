import React from 'react';
import { Content } from './components/pages/Home'
import Toggle from './components/layout/Navbar'
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import "./App.css"
import NotFound from './components/pages/NotFound';
import Account from './components/pages/Account';

const Container = styled.div`
  // max-width: 50%;
  // margin: 8rem auto 0;
  height: 100%;
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
        <Routes>
          <Route exact path="/" element={<Content/>} />
          <Route exact path="/account" element={<Account/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route exact path="*"  element={<NotFound/>} />
          </Routes>
      </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
