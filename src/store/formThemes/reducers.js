import { SET_FORM_THEME } from "./actions.js";
import { updateObject } from "../../utils/utilites.js";

const defaultState = {
  formClasses: ["to-do-item-container"],
};

export const formReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FORM_THEME:
      return updateObject(state, {
        formClasses: ["to-do-item-container", action.payload],
      });

    default:
      return state;
  }
};
