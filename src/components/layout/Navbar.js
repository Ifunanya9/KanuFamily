import React from 'react';
// import styled from 'styled-components';
import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'

export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <nav 
      style={{
        backgroundColor: "#1c1c21",
        color: "white",
        padding: "0 20px 0 20px",
      }}
    >
      <SignedInLinks toggleTheme={toggleTheme} theme={theme} />
      {/* <SignedOutLinks toggleTheme={toggleTheme} theme={theme} /> */}

    </nav>
  )
}
