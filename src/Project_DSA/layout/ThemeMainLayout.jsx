import React, { Children } from "react";

function ThemeMainLayout({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default ThemeMainLayout;
