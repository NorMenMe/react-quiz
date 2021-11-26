import React from "react";
import clsx from "clsx";

function Button(props) {
  let { type, className, children } = props;

  const classes = clsx("ui-btn", className);

  if (!type) {
    type = "submit";
  }

  return (
    <>
      <button type={type} className={classes}>
        {children}
        <i class="fas fa-arrow-right arrow"></i>
      </button>
    </>
  );
}

export default Button;
