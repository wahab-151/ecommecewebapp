import { createTheme } from "@mui/material/styles";

export const darkThemee = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: " #141414",
    },
    secondary: {
      main: "#FFFFFF",
      tertiary: "#000000",
    },
    info: {
      main: "#777777",
      backColor: "#D9D9D9",
      contrastText: " #FF6F61",
      headerLinks: " #FFFFFF;",
    },
    background: {
      banner: "#121212 ",
      text: "#FFFF",
      btnback: "#000",
      contact: "#1B1B1B",
      login: " #000000",
      loginsection: "#0E0E0E",
      accountRed: "#D34B56",
    },
    input: {
      main: "#8D8D8D",
    },
    btn: {
      border: "#FFFFFF",
      color: "#FFFFFF",
    },
    divider: "#C6D0D4",
  },
  typography: {
    fontFamily: " Urbanist, sans-serif",
  },
});
