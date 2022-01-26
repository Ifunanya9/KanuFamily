import React, { Component } from 'react'
import "./signin.css"
import { signIn } from "../../store/actions/authActions"
import {Navigate} from "react-router-dom"
import {connect} from 'react-redux'

class SignIn extends Component {
  state = {
    error: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.password === "" || this.state.email === "") {
      const err = "Login failed";
      this.setState({
        error: err,
      });
    }
    try {
      await this.props.signIn(this.state);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };
  render() {
    if (this.props.auth.uid) return <Navigate to="/"/>
    console.log(this.props.signInError);
    return (
      <div style={{display:"flex", height: "100%"}}>
          <div className="background-primary" style={{width: "40%", height: "100%"}}></div>
          <div style={{width: "70%"}}>
            <div style={{margin: "10rem auto 0 8rem"}}>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          {this.props.backupSignInError === "" ? <div style={{alignItems: "center", outline: "none", backgroundColor: "#b17171", height: "25px", border: "solid #966060 1px", borderRadius: "3px", width: "290px", textAlign: 'match-parent', padding: "10px 0"}}>Login Error</div> : <div></div>}
        <div className="login-form">
        {/* <FormItem>
                  <Input
                    prefix={<UserOiutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Username"
                  />
              </FormItem>
              <FormItem>
                  <Input
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }}/>}
                    type="password"
                    placeholder="Password"
                  />
              </FormItem> */}
                  <div className="mt-0 col">
                    <label className="form-label h6" htmlFor="email" style={{marginRight: "5px"}}>
                      Email
                    </label>
                    <input
                    style={{outline: "none", height: "25px", border: "solid rgba(0,0,0,.25) 1px", borderRadius: "3px", width: "290px" }}
                      autoFocus
                      // required
                      type="email"
                      name="email"
                      id="email"
                      className="form-control form-control-lg input-block"
                      aria-autocomplete="none"
                      onChange={this.handleChange}
                      spellCheck="true"
                      aria-describedby="input-check-3834 "
                    />
                  </div>
                  <br/>
                  <div className="mt-0 col">
                    <label className="form-label h6" htmlFor="password" style={{marginRight: "5px"}}>
                      Password
                    </label>
                    <input
                    style={{outline: "none", height: "25px", border: "solid rgba(0,0,0,.25) 1px", borderRadius: "3px", width: "290px" }}
                      // required
                      type="password"
                      name="password"
                      id="password"
                      className="form-control form-control-lg input-block"
                      aria-autocomplete="none"
                      spellCheck="true"
                      onChange={this.handleChange}
                      aria-describedby="input-check-3834 "
                    />
                  </div>
                </div>
                <div className="mt-0">
                  {this.props.signInError ? (
                    <div>
                      <p className="text-danger">{this.props.signInError}</p>
                    </div>
                  ) : null}
                </div>
                <div className="mt-0">
                  <button className="btn btn-primary" type="submit" style={{marginTop: "10px"}}>
                    Sign in
                  </button>
                </div>
                </form>
                </div>
                </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signInError: state.firebase.auth.signInError,
    auth: state.firebase.auth,
    backupSignInError: state.firebase.auth.backupSignInError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
