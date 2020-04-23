export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CHECK_TASK = "CHECK_TASK";
export const MAKE_ROUNDED = "MAKE_ROUNDED";
export const MAKE_SQUARE = "MAKE_SQUARE";
export const MAKE_PYRAMID = "MAKE_PYRAMID";
export const SET_RALEWAY = "SET_RALEWAY";
export const SET_SHADOW_INTO_LIGHT = "SET_SHADOW_INTO_LIGHT";
export const SET_MONTSERRAT = "SET_MONTSERRAT";
export const SET_OSWALD = "SET_OSWALD";
export const SET_UBUNTU = "SET_UBUNTU";
export const SET_BANGERS = "SET_BANGERS";
export const GOLD_THEME = "GOLD_THEME";
export const BLUE_THEME = "BLUE_THEME";
export const PURPLE_THEME = "PURPLE_THEME";
export const YELLOW_GREEN_THEME = "YELLOW_GREEN_THEME";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (task) => {
  return {
    type: DELETE_TASK,
    payload: task,
  };
};

export const check = (id) => {
  return {
    type: CHECK_TASK,
    payload: id,
  };
};

export const makeRounded = () => {
  return {
    type: MAKE_ROUNDED,
  };
};
export const makeSquare = () => {
  return {
    type: MAKE_SQUARE,
  };
};
export const makePyramid = () => {
  return {
    type: MAKE_PYRAMID,
  };
};
export const makeRaleway = () => {
  return {
    type: SET_RALEWAY,
  };
};

export const makeShadowIntoLight = () => {
  return {
    type: SET_SHADOW_INTO_LIGHT,
  };
};

export const makeMontserrat = () => {
  return {
    type: SET_MONTSERRAT,
  };
};

export const makeOswald = () => {
  return {
    type: SET_OSWALD,
  };
};
export const makeUbuntu = () => {
  return {
    type: SET_UBUNTU,
  };
};
export const makeBangers = () => {
  return {
    type: SET_BANGERS,
  };
};
export const setBlueTheme = () => {
  return {
    type: BLUE_THEME,
  };
};
export const setGoldTheme = () => {
  return {
    type: GOLD_THEME,
  };
};
export const setPurpleTheme = () => {
  return {
    type: PURPLE_THEME,
  };
};
export const setYGreenTheme = () => {
  return {
    type: YELLOW_GREEN_THEME,
  };
};
