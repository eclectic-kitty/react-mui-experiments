import * as React from "react";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import {
  Grid2 as Grid,
  Stack,
  Box,
  Container,
  Paper,
  CssBaseline,
  LinearProgress,
} from "@mui/material";

import ProgressBar from "./ProgressBar";

const auTheme = createTheme({
  palette: {
    background: {
      default: "#FEF6F7",
      paper: "#F1E9EE",
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
    progressBar: {
      main: "#F4ACB7",
      light: "#FDEDEF",
    },
  },
});

// tbh, not sure what the props tag is for, but it's present on the customization page sooo
const OurProgress = styled(LinearProgress)(({ theme }) => ({}));

export default function App() {
  return (
    <ThemeProvider theme={auTheme}>
      <CssBaseline />

      <Grid container columns={12}>
        <Grid size={10} offset={1}>
          <Paper sx={{ padding: 2 }}>
            <Stack spacing={2}>
              <ProgressBar value={100}></ProgressBar>
              <ProgressBar
                value={50}
                custHeight={15}
                custPadding={0.5}
              ></ProgressBar>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
