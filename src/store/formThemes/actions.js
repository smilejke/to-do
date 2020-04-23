export const SET_FORM_THEME = "SET_FORM_THEME";

export const setFormTheme = (form) => {
  return {
    type: SET_FORM_THEME,
    payload: form,
  };
};
