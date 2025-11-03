import React from "react";

function Pre({ load }) {
  return (
    <div
      id={load ? "preloader" : "preloader-none"}
      className="preloader-wrapper"
    >
      {load && <div className="spinner"></div>}
    </div>
  );
}

export default Pre;
