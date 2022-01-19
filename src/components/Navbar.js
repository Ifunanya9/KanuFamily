import React from 'react';
import styled from 'styled-components';
import SignedInLinks from './SignedInLinks'

// let Sun, Moon;

// Sun = Moon = styled.svg`
//   position: absolute;
//   align-items: center;
//   justify-flex: center;
//   display:flex;
//   transition: all .5s linear;
// `;

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
      {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
      }}>
      <h1 style={{marginRight: "50px"}}>Okoronkwo</h1>

      <ul style={{listStyle: "none", display: "flex"}}>
        <li style={{margin: "0 10px 0 10px"}}><h3>Home</h3></li>
        <li style={{margin: "0 10px 0 10px"}}><h3>About</h3></li>
      </ul>
      </div>
    

        <div onClick={toggleTheme} style={{cursor:'pointer', marginBottom:'50px', marginLeft:'600px'}}>
      { theme === 'light' ? <Moon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon>
      : 
      <Sun xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></Sun> }
    </div>
      <div style={{display: "flex",}}>
      <ul style={{listStyle: "none", display: "flex"}}>
<<<<<<< HEAD
        <li style={{margin: "-5px 5px 0 5px"}}><h3>Log-in</h3></li>
=======
        <li style={{margin: "-5px 5px 0 5px"}}><h1>Log-in</h1></li>
        <i class="fas fa-user-circle"></i>
>>>>>>> 26ac1cee39c557aeb730f0356087bd6e47019d38
      </ul>
      </div>
      </div> */}
    </nav>
  )
}
