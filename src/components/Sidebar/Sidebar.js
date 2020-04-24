import React from "react";
import { setFormTheme } from "../../store/formThemes/actions.js";
import { setFont } from "../../store/fontThemes/actions.js";
import { setColorTheme } from "../../store/colorThemes/actions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import List from "./List/List.js";
import {
  formSettings,
  colorSettings,
  fontSettings,
} from "../../utils/utilites.js";

function Sidebar(props) {
  const { sideBarThemes, setFormTheme, setColorTheme, setFont } = props;
  return (
    <div className={sideBarThemes.join(" ")}>
      <List options={formSettings} action={setFormTheme} />
      <List options={colorSettings} action={setColorTheme} />
      <List options={fontSettings} action={setFont} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    classes: state.forms.formClasses,
    sideBarThemes: state.colors.sideBarThemes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormTheme: bindActionCreators(setFormTheme, dispatch),
    setFont: bindActionCreators(setFont, dispatch),
    setColorTheme: bindActionCreators(setColorTheme, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
