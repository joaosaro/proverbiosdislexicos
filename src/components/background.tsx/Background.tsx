import React from "react";
import "./background.scss";
// import { ThemeContext } from "../../providers/Theme";

const Background: React.FC = () => {
  //const { color } = useContext(ThemeContext);

  return (
    <svg className="background" fill="#3498DB">
      <defs>
        <linearGradient id="linearGrad" x1="53.5%" y1="0%" x2="61%" y2="100%">
          <stop stopColor="#000000" stopOpacity="0" offset="0%"></stop>
          <stop stopColor="#000000" stopOpacity="0.5" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="gradientTexture"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"></stop>
          <stop
            stopColor="#FFFFFF"
            stopOpacity="0.399569746"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <rect
        className="canvas-size"
        x="0"
        y="0"
        width="100%"
        height="100%"
      ></rect>
      <rect
        className="canvas-size"
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#linearGrad)"
      ></rect>
      <line
        className="divide-line"
        x1="0"
        y1="55%"
        x2="100%"
        y2="45%"
        stroke="white"
        strokeWidth="5px"
      ></line>
    </svg>
  );
};

export default Background;
