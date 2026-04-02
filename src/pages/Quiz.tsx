import React from "react";

export default function Quiz() {
  const [value, setValue] = React.useState<number>(100)
  return (
    <React.Fragment>
      <div className="container_quiz">
        <div className="progress">
          <div className="progress-fill" style={{ width: `${value}%` }} />
        </div>
        <p>Temps restant</p>
        <input
          type="range"
          className="qq"
          style={{
            pointerEvents: "none",
            color: "rgb(79, 70, 229)",
          }}
        />
        <div className="cadre_quiz"></div>
      </div>
    </React.Fragment>
  );
}
