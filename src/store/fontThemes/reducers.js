import { SET_FONT } from "./actions.js";
import { updateObject } from "../../utils/utilites.js";

const defaultState = {
  taskClasses: ["task"],
};

export const fontReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FONT:
      return updateObject(state, {
        taskClasses: ["task", action.payload],
      });

    default:
      return state;
  }
};
