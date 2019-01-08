// Libraries
import React from "react";

// Styles
import logoStyles from "./Logo.module.scss";

const CirclesOnly = props => {
  let dynamicStyles = {
    height: `${props.scale * 45}px`,
    width: `${props.scale * 45}px`,
  }
  return(
    <div style={dynamicStyles}>
      <svg
        viewBox="0 0 50 50"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g strokeWidth="4.5" fill="none">
          <circle cx="18" cy="25" r="15" />
          <circle cx="26" cy="22.5" r="15" />
          <circle cx="34" cy="20" r="15" />
        </g>
      </svg>
    </div>
  )
}

const CirclesTitle = props => {
  let dynamicStyles = {
    height: `${props.scale * 45}px`,
    width: `${props.scale * 155}px`,
  }
  let titleStyle = {
    fontSize: "37.5px",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    letterSpacing: "-0.5px",
  }
  return(
    <div style={dynamicStyles}>
      <svg
      viewBox="0 0 155 50"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g strokeWidth="4.5" fill="none">
          <circle cx="18" cy="25" r="15" />
          <circle cx="26" cy="22.5" r="15" />
          <circle cx="34" cy="20" r="15" />
        </g>
        <g className={logoStyles.logoText}>
          <text x="64" y="35" style={titleStyle}>
            BFC
          </text>
        </g>
      </svg>
    </div>
  )
}

const CirclesTitleSubtitle = props => {
  let dynamicStyles = {
    height: `${props.scale * 45}px`,
    width: `${props.scale * 160}px`,
  }
  let titleStyle = {
    fontSize: "30px",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    letterSpacing: "-0.5px",
  }
  let subtitleStyle = {
    fontSize: "10px",
    fontFamily: "sans-serif",
    letterSpacing: "1px",
  }
  return(
    <div style={dynamicStyles}>
      <svg
      viewBox="0 0 160 50"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g strokeWidth="4.5" fill="none">
          <circle cx="18" cy="25" r="15" />
          <circle cx="26" cy="22.5" r="15" />
          <circle cx="34" cy="20" r="15" />
        </g>
        <g className={logoStyles.logoText}>
          <text style={titleStyle} x="62" y="29">
            BFC
          </text>
          <text x="64" y="41" style={subtitleStyle} className={logoStyles.logoSubText}>
            Technologies Inc.
          </text>
        </g>
      </svg>
    </div>
  )
}

class Logo extends React.Component {
  render() {
    const { scale, version } = this.props
    if (version === 'CirclesOnly') {
      return <CirclesOnly scale={scale}/>
    } else if (version === 'CirclesTitleSubtitle') {
      return <CirclesTitleSubtitle scale={scale}/>
    }
    return <CirclesTitle scale={scale}/>
  }
}

export default Logo;
