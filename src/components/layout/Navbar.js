import React from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {signOut} from "../../store/actions/authActions"

const Toggle = ({auth, theme, toggleTheme }) => {
  console.log(theme);
  return (
    <nav 
      style={{
        backgroundColor: "#1c1c21",
        color: "white",
        padding: "0 20px 0 20px",
      }}
    >
      {auth.uid ?
      <SignedInLinks toggleTheme={toggleTheme} theme={theme} />
      :
      <SignedOutLinks toggleTheme={toggleTheme} theme={theme} />
    }
      

    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signOut: (out) => dispatch(signOut(out))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)