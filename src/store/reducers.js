import { combineReducers } from "redux";
import { functionalReducer } from "./toDoFunctional/reducers.js";
import { formReducer } from "./formThemes/reducers.js";
import { fontReducer } from "./fontThemes/reducers.js";
import { colorReducer } from "./colorThemes/reducers.js";

export default combineReducers({
  actions: functionalReducer,
  forms: formReducer,
  fonts: fontReducer,
  colors: colorReducer,
});
