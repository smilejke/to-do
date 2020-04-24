import { SET_COLOR_THEME } from "./actions.js";
import { updateObject } from "../../utils/utilites.js";

const defaultState = {
  themes: ["app purple"],
  sideBarThemes: ["sidebar-container purple-sidebar"],
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
