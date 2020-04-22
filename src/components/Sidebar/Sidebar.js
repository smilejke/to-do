import React from "react";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div>
        <span>Tasks style</span>
        <ul>
          <li>Default</li>
          <li>Rounded</li>
          <li>Triangular</li>
          <li>Envelope</li>
        </ul>
      </div>

      <div>
        <span>Theme</span>
        <ul>
          <li>Default(Light)</li>
          <li>Dark</li>
          <li>Purple</li>
          <li>Yellow-Green</li>
        </ul>
      </div>

      <div>
        <span>Font</span>
        <ul>
          <li>Raleway</li>
          <li>Shadows Into Light</li>
          <li>Montserrat</li>
          <li>Oswald</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
