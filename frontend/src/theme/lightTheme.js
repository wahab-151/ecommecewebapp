import { createTheme } from "@mui/material/styles";

export const lightThemee = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFF",
      light: "#000000",
    },
    secondary: {
      main: "#000000",
      tertiary: "#F8F8F8",
    },
    info: {
      main: "#777777",
      backColor: "#D9D9D9",
      contrastText: " #FF6F61",
      headerLinks: " #282C3F;",
    },
    background: {
      banner: "#000",
      text: "#FFFF",
      btnback: "#000",
      contact: " #F8F8F8",
      login: "#F8F8F8",
      loginsection: " #FFF",
      accountRed: "#D34B56",
    },
    input: {
      main: "#282828 ",
    },
    btn: {
      border: "#C1C1C1",
      color: "#000000",
    },
  },
  typography: {
    fontFamily: " Urbanist, sans-serif",
  },
});
