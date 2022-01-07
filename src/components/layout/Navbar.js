import React from 'react'

const Navbar = () => {
  return (
    <nav 
      style={{
        backgroundColor: "#282730", 
        color: "white", 
        marginTop: "10px", 
        padding: "0 20px 0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
      }}>
      <h1 style={{marginRight: "50px"}}>Okoronkwo</h1>

      <ul style={{listStyle: "none", display: "flex"}}>
        <li style={{margin: "0 10px 0 10px"}}><h1>Home</h1></li>
        <li style={{margin: "0 10px 0 10px"}}><h1>About</h1></li>
      </ul>
      </div>

      <div>
      <ul style={{listStyle: "none", display: "flex"}}>
        <li style={{margin: "0 5px 0 5px"}}><h1>Log-in</h1></li>
      </ul>
      </div>
    </nav>
  )
}
// #282c36
export default Navbar