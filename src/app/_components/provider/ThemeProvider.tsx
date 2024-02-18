"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: { main: "#e6e6e6", contrastText: "#000" },
      secondary: { main: "#31d39b", contrastText: "#fff" },
      error: { main: "#ff6d4a" },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
