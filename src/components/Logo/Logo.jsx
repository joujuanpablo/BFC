// Libraries
import React from "react";

// Styles
import logoStyles from "./Logo.module.scss";

const CirclesOnly = props => {
  let dynamicStyles = {
    height: `${props.scale * 55}px`,
    width: `${props.scale * 55}px`,
  }
  return(
    <div style={dynamicStyles}>
      <svg
        viewBox="0 0 55 55"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke-width="4.5" fill="none">
          <circle cx="24" cy="30" r="15" />
          <circle cx="32" cy="27.5" r="15" />
          <circle cx="40" cy="25" r="15" />
        </g>
      </svg>
    </div>
  )
}

const CirclesTitle = props => {
  let dynamicStyles = {
    height: `${props.scale * 55}px`,
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
      viewBox="0 0 155 55"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke-width="4.5" fill="none">
          <circle cx="24" cy="30" r="15" />
          <circle cx="32" cy="27.5" r="15" />
          <circle cx="40" cy="25" r="15" />
        </g>
        <g className={logoStyles.logoText}>
          <text x="64" y="40" style={titleStyle}>
            BFC
          </text>
        </g>
      </svg>
    </div>
  )
}

const CirclesTitleSubtitle = props => {
  let dynamicStyles = {
    height: `${props.scale * 55}px`,
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
      viewBox="0 0 160 55"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke-width="4.5" fill="none">
          <circle cx="24" cy="30" r="15" />
          <circle cx="32" cy="27.5" r="15" />
          <circle cx="40" cy="25" r="15" />
        </g>
        <g className={logoStyles.logoText}>
          <text style={titleStyle} x="64" y="34">
            BFC
          </text>
          <text x="66" y="46" style={subtitleStyle}>
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
