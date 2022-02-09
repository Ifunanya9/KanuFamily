const initState = {
  signInError: null,
  backupSignInError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        backupSignInError: "Login failed",
        signInError: action.err.message,
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        signInError: null,
        backupSignInError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    default:
      return state;
    case "ADD_PERSON_ERROR":
      console.log("it couldn't add the person");
      return {
        ...state,
        backupAddPersonError: "Login failed",
        addPersonError: action.err.message,
      };
    case "ADD_PERSON_SUCCESS":
      console.log("the peron was added");
      return {
        ...state,
        addPersonError: null,
        backupAddPersonError: null,
      };
  }
};

export default authReducer;
