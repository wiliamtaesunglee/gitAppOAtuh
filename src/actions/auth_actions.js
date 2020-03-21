const githubLogin = () => {
  return {
    type: "GITHUB_LOGIN",
    payload: "userObj"
  }
};

const logout = () => {
  return {
    type: "LOG_OUT"
  }
};

const setUserData = () => {
  return {
    type: "FETCH_USER_DATA",
    payload: "userDataObj"
  }
};

export default {
  githubLogin,
  setUserData
};
