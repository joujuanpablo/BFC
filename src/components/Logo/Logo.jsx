// Libraries
import React from "react";

// Styles
import logoStyles from "./Logo.module.scss";

class Logo extends React.Component {
  render() {
    const { scale } = this.props
    let dynamicStyles = {
      height: `${scale * 55}px`,
      width: `${scale * 155}px`,
    }
    return (
      <div className={logoStyles.logoWrapper} style={dynamicStyles}>
        <svg
          viewBox="0 0 155 55"
          preserveAspectRatio="xMidYMin slice"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g className="logoCircles" stroke-width="4.5" fill="none">
            <circle cx="24" cy="30" r="15" />
            <circle cx="32" cy="27.5" r="15" />
            <circle cx="40" cy="25" r="15" />
          </g>
          <g className={logoStyles.logoText}>
            <text className={logoStyles.logoTitle} x="68" y="40">
              BFC
            </text>
          </g>
        </svg>
      </div>
    );
  }
}

export default Logo;
