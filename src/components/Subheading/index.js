import React from "react";
import "./style.scss";

const Subheading = ({ children, glitch }) => (
  <h4 className="subheading">
    <span className="subheading__content">{children}</span>
    {glitch && <span className="subheading__content">{children}</span>}
    {glitch && <span className="subheading__content">{children}</span>}
  </h4>
);

export default Subheading;
