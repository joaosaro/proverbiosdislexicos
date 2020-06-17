import React, { useState } from "react";
import "./controls.scss";

const Controls: React.FC = () => {
  const [paletteOpen, togglePalette] = useState<boolean>(false);

  const classes = ["controls", paletteOpen ? "controls--open" : null]
    .join(" ")
    .trim();

  return (
    <aside className={classes}>
      <div className="options-placeholder">
        <button
          onClick={() => {
            togglePalette(true);
          }}
          style={{ width: 30 }}
        >
          OP
        </button>
      </div>
      <div className="palette-placeholder">palette</div>
      <button
        className="retacement-placeholder"
        onClick={() => {
          togglePalette(false);
        }}
      >
        Arrow
      </button>
    </aside>
  );
};

export default Controls;
