import React from "react";
import ThemeMainLayout from "../layout/ThemeMainLayout";
import { Helmet } from "react-helmet";
import { Html, Head, Main, NextScript } from "next/document";

function ThemeDashBoard() {
  return (
    <ThemeMainLayout>
      <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <h1>Hello This the Main DashBoard</h1>
      </div>
    </ThemeMainLayout>
  );
}

export default ThemeDashBoard;
