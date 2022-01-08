import React from 'react';
import styled from 'styled-components';
import Dropdown from './dropdown'

let Sun, Moon;

Sun = Moon = styled.svg`
  position: absolute;
  align-items: center;
  justify-flex: center;
  display:flex;
  transition: all .5s linear;
`;

const SignedInLinks = ({ theme, toggleTheme }) => { 
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
      }}>
      <h1 style={{marginRight: "50px"}}>Okoronkwo</h1>

      <ul style={{listStyle: "none", display: "flex"}}>
        <li style={{margin: "0 10px 0 10px"}}><h1>Home</h1></li>
        <li style={{margin: "0 10px 0 10px"}}><h1>About</h1></li>
        <li style={{margin: "0 20px 0 10px"}}><h1>Tree</h1></li>
        <Dropdown type="support"><h1>Support</h1></Dropdown>
      </ul>
      </div>
    

        <div onClick={toggleTheme} style={{cursor:'pointer', marginBottom:'50px', marginLeft:'600px', alignItems: "center"}}>
      { theme === 'light' ? <Moon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon>
      : 
      <Sun xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></Sun> }
    </div>
      <div style={{display: "flex",}}>
      <ul style={{listStyle: "none", display: "flex", alignItems: "center"}}>
        <Dropdown type="account"><h1 style={{marginRight: "5px"}}><i class="fas fa-user-circle"></i></h1><h1>Chika</h1></Dropdown>
      </ul>
      </div>
      </div>
    )
  }

export default SignedInLinks;
