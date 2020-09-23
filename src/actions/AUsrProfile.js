const UsrName = (name) => {
  return {
    type: "USR_NAME",
    payload: name,
  };
};

const UsrEmail = (email) => {
  return {
    type: "USR_EMAIL",
    payload: email,
  };
};

const UsrPassword = (password) => {
  return {
    type: "USR_PASSWORD",
    payload: password,
  };
};

export { UsrName, UsrEmail, UsrPassword };
