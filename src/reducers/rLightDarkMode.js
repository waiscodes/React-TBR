import React from "react";

const LightDarkMode = (state = "LIGHTMODE", action) => {
  switch (action.type) {
    case "DARKMODE":
      return (state = true);
    case "LIGHTMODE":
      return (state = false);
    default:
      return state;
  }
};

export default LightDarkMode;
