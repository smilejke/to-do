import { SET_COLOR_THEME } from "./actions.js";

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

const defaultState = {
  themes: ["app"],
  sideBarThemes: ["sidebar-container"],
};

export const colorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COLOR_THEME:
      return updateObject(state, {
        themes: ["app", action.payload],
        sideBarThemes: [
          "sidebar-container",
          `${action.payload}-sidebar`,
          "sidebar-show",
        ],
      });

    default:
      return state;
  }
};
