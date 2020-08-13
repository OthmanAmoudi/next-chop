import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/theme";

export class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
}
