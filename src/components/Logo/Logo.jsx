// Libraries
import React from "react";

// Styles
import logoStyles from "./Logo.module.scss";

class Logo extends React.Component {
  render() {
    return (
      <div className={logoStyles.logoWrapper}>
        <svg
          viewBox="0 0 310 110" //how many units do I want to fit into my window horizontally and vertically respectively
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g className="logoCircles" stroke-width="9" fill="none">
            <circle cx="48" cy="60" r="30" />
            <circle cx="64" cy="55" r="30" />
            <circle cx="80" cy="50" r="30" />
          </g>
          <g className={logoStyles.logoText}>
            <text className={logoStyles.logoTitle} x="136" y="80">
              BFC
            </text>
          </g>
        </svg>
      </div>
    );
  }
}

export default Logo;
