export const SET_COLOR_THEME = "SET_COLOR_THEME";

export const setColorTheme = (theme) => {
  return {
    type: SET_COLOR_THEME,
    payload: theme,
  };
};
