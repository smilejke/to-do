import React, { useState } from "react";
import { SettingFilled } from "@ant-design/icons";

function SidebarButton() {
  const [sideBarActive, activateSideBar] = useState(false);

  const showSidebar = () => {
    document
      .querySelector(".sidebar-container")
      .classList.toggle("sidebar-show");
    document
      .querySelector(".sidebar-button")
      .classList.toggle("sidebar-button-moved");
    document.querySelector(".todo-placement").classList.toggle("todo-moved");
    sideBarActive ? activateSideBar(false) : activateSideBar(true);
  };

  return (
    <SettingFilled
      className="sidebar-button"
      onClick={showSidebar}
      spin={sideBarActive ? true : false}
    />
  );
}
export default SidebarButton;
