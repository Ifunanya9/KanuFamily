import React, { Component } from 'react'


export default class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <div className="row">
                  <div className="mt-0 col">
                    <label className="form-label h6" htmlFor="email">
                      Email
                    </label>
                    <input
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
                  <div className="mt-0 col">
                    <label className="form-label h6" htmlFor="password">
                      Password
                    </label>
                    <input
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
                  {/* {this.state.error ? (
                    <div>
                      <p className="text-danger">{this.state.error}</p>
                    </div>
                  ) : null} */}
                  {this.props.signInError ? (
                    <div>
                      <p className="text-danger">{this.props.signInError}</p>
                    </div>
                  ) : null}
                </div>
                <div className="mt-0">
                  <button className="btn btn-primary" type="submit">
                    Sign in
                  </button>
                </div>
      </div>
    )
  }
}
