import React from "react";
import {
  makeRounded,
  makeSquare,
  makePyramid,
  makeRaleway,
  makeShadowIntoLight,
  makeMontserrat,
  makeOswald,
  makeUbuntu,
  makeBangers,
  setBlueTheme,
  setGoldTheme,
  setPurpleTheme,
  setYGreenTheme,
} from "../../store/actions.js";
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
              props.makeSquare();
            }}
          >
            Default(Square)
          </li>
          <li
            onClick={() => {
              props.makeRounded();
            }}
          >
            Rounded
          </li>
          <li
            onClick={() => {
              props.makePyramid();
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
              props.setGoldTheme();
            }}
          >
            Gold
          </li>
          <li
            onClick={() => {
              props.setBlueTheme();
            }}
          >
            Blue
          </li>
          <li
            onClick={() => {
              props.setPurpleTheme();
            }}
          >
            Purple
          </li>
          <li
            onClick={() => {
              props.setYGreenTheme();
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
              props.makeRaleway();
            }}
          >
            Raleway (en)
          </li>
          <li
            onClick={() => {
              props.makeShadowIntoLight();
            }}
          >
            Shadows Into Light (en)
          </li>
          <li
            onClick={() => {
              props.makeBangers();
            }}
          >
            Bangers (en)
          </li>
          <li
            onClick={() => {
              props.makeMontserrat();
            }}
          >
            Montserrat (en/ru)
          </li>
          <li
            onClick={() => {
              props.makeOswald();
            }}
          >
            Oswald (en/ru)
          </li>
          <li
            onClick={() => {
              props.makeUbuntu();
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
    classes: state.formClasses,
    sideBarThemes: state.sideBarThemes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeRounded: bindActionCreators(makeRounded, dispatch),
    makeSquare: bindActionCreators(makeSquare, dispatch),
    makePyramid: bindActionCreators(makePyramid, dispatch),
    makeRaleway: bindActionCreators(makeRaleway, dispatch),
    makeShadowIntoLight: bindActionCreators(makeShadowIntoLight, dispatch),
    makeMontserrat: bindActionCreators(makeMontserrat, dispatch),
    makeOswald: bindActionCreators(makeOswald, dispatch),
    makeUbuntu: bindActionCreators(makeUbuntu, dispatch),
    makeBangers: bindActionCreators(makeBangers, dispatch),

    setBlueTheme: bindActionCreators(setBlueTheme, dispatch),
    setGoldTheme: bindActionCreators(setGoldTheme, dispatch),
    setPurpleTheme: bindActionCreators(setPurpleTheme, dispatch),
    setYGreenTheme: bindActionCreators(setYGreenTheme, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
