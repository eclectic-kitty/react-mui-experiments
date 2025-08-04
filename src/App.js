import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid2 as Grid, Paper, Typography, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import TextBlock from "./typeComponents/TextBlock";
import MainHeading from "./typeComponents/MainHeading";
import Paragraph from "./typeComponents/Paragraph";
import SubHeading from "./typeComponents/SubHeading";

import DecompFacts from "./DecompFacts";

const auTheme = createTheme({
  palette: {
    background: {
      default: "#EBEBF0",
      paper: "#EEEBFC",
    },
    text: {
      primary: "#383649",
    },
    twilight: {
      main: "#656284",
      light: "#AFADC2",
      dark: "#3A3659",
      contrastText: "#D7D6E1",
    },
    blackberryJam: {
      main: "#B689A2",
      light: "#E2D0DA",
      dark: "#784A63",
      contrastText: "#F7F2F5",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={auTheme}>
      <CssBaseline />
      <Grid container columns={12} spacing={3} marginTop={8} marginX={25}>
        {/* Header */}
        <Grid size={12}>
          <Paper elevation={8} sx={{ padding: 2 }}>
            <Typography variant="h2" component="h1" align="center">
              Aurora's Test Page?
            </Typography>
          </Paper>
        </Grid>

        {/* Content */}
        <DecompFacts></DecompFacts>
        <Grid size={4}>
          <Paper elevation={4}>
            <Typography variant="h4" component="h3">
              some info about ur gorgeous and benevolent teacher
            </Typography>
          </Paper>
        </Grid>

        {/* <TextBlock sx={{ bgcolor: "twilight.light" }}>
          <SubHeading> u get a bunch of decomp facts app.</SubHeading>

          <Paragraph>
            Did you know that after you die, a lot of your tissues liquefy. This
            is not due to decomposition, but due to an built-in mechanism in
            your cells?
          </Paragraph>

          <Button variant="contained" color="blackberryJam">
            Guau, great fact!
          </Button>
        </TextBlock> */}
      </Grid>
    </ThemeProvider>
  );
};

export default App;
