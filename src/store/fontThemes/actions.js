export const SET_FONT = "SET_FONT";

export const setFont = (font) => {
  return {
    type: SET_FONT,
    payload: font,
  };
};
