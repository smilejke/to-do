import React from "react";
import { setFormTheme } from "../../store/formThemes/actions.js";
import { setFont } from "../../store/fontThemes/actions.js";
import { setColorTheme } from "../../store/colorThemes/actions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function Sidebar(props) {
  return (
    <div className={props.sideBarThemes.join(" ")}>
      <div>
        <span>Tasks style</span>
        <ul>
          <li
            onClick={() => {
              props.setFormTheme("");
            }}
          >
            Default(Square)
          </li>
          <li
            onClick={() => {
              props.setFormTheme("rounded");
            }}
          >
            Rounded
          </li>
          <li
            onClick={() => {
              props.setFormTheme("pyramid");
            }}
          >
            Pyramid
          </li>
        </ul>
      </div>

      <div>
        <span>Theme</span>
        <ul>
          <li
            onClick={() => {
              props.setColorTheme("gold");
            }}
          >
            Gold
          </li>
          <li
            onClick={() => {
              props.setColorTheme("blue");
            }}
          >
            Blue
          </li>
          <li
            onClick={() => {
              props.setColorTheme("purple");
            }}
          >
            Purple
          </li>
          <li
            onClick={() => {
              props.setColorTheme("yellow-green");
            }}
          >
            Yellow-Green
          </li>
        </ul>
      </div>

      <div>
        <span>Font</span>
        <ul>
          <li
            onClick={() => {
              props.setFont("raleway");
            }}
          >
            Raleway (en)
          </li>
          <li
            onClick={() => {
              props.setFont("shadow-into-light");
            }}
          >
            Shadows Into Light (en)
          </li>
          <li
            onClick={() => {
              props.setFont("bangers");
            }}
          >
            Bangers (en)
          </li>
          <li
            onClick={() => {
              props.setFont("montserrat");
            }}
          >
            Montserrat (en/ru)
          </li>
          <li
            onClick={() => {
              props.setFont("oswald");
            }}
          >
            Oswald (en/ru)
          </li>
          <li
            onClick={() => {
              props.setFont("ubuntu");
            }}
          >
            Ubuntu (en/ru)
          </li>
        </ul>
      </div>
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
