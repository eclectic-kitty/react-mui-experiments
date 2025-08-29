import * as React from "react";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import {
  CssBaseline,
  Grid2 as Grid,
  Collapse,
  Slide,
  Backdrop,
  Paper,
  Button,
  Typography,
} from "@mui/material";

import ProgressBar from "./ProgressBar";

import DecompFacts from "./DecompFacts";
import zIndex from "@mui/material/styles/zIndex";

const auTheme = createTheme({
  palette: {
    background: {
      default: "#FEF6F7",
      paper: "#F1E9EE",
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
      progressBar: {
        main: "#F4ACB7",
        light: "#FDEDEF",
      },
    },
  },
});

const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawer = () => {
    // My understanding is that I'm giving it a function to switch state from the previous to a new one
    // prev doesn't need to be defined because it's a parameter,
    // Also, useState setter functions, when given a function as a parameter, automatically give that function the previous value
    setDrawerOpen((prev) => !prev);
  };

  const contRef = React.useRef(null);

  return (
    <ThemeProvider theme={auTheme}>
      <CssBaseline />

      {/* So yeah, not ideal, but it works :p
        TODO: make the height and positioning calculated */}
      <Grid container columns={12} sx={{ padding: 5 }}>
        <Grid size={12} sx={{ zIndex: 10 }}>
          <Paper elevation={4} sx={{ paddingY: 3, textAlign: "center" }}>
            <Typography>I'm on top!</Typography>
          </Paper>
        </Grid>
        <Grid
          size={12}
          ref={contRef}
          sx={{ position: "relative", top: -60, zIndex: 0 }}
        >
          <Paper
            elevation={2}
            sx={{ paddingTop: 17, paddingBottom: 10, textAlign: "center" }}
          >
            <Typography>I'm on the bottom!</Typography>
          </Paper>
        </Grid>
        {/* <Backdrop
          open={true}
          slotProps={{ root: { backgroundColor: "rgba(201, 102, 240, 1)" } }}
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            top: -311,
            zIndex: 10,
          }}
        > */}
        <Slide
          in={drawerOpen}
          direction="right"
          //container={contRef.current}
          sx={{ width: "100%", height: "100%" }}
        >
          <Grid size={4} offset={8} sx={{ position: "relative", zIndex: 20 }}>
            <Paper
              elevation={4}
              sx={{ paddingY: 14.2, textAlign: "center", width: "100%" }}
            >
              <Typography>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Typography>
            </Paper>
          </Grid>
        </Slide>
        {/* </Backdrop> */}
      </Grid>
      <Button variant="contained" onClick={handleDrawer} sx={{ margin: 1 }}>
        open/close
      </Button>

      {/* ~~ Position: relative ~~
    ~~ This renders best, closest to what we want, but far from ideal and not v responsive...
    A

    <Grid 
      container 
      columns={12} 
      sx={{ padding: 5}}
    >
      <Grid size={12} sx={{zIndex: 10}}>
        <Paper elevation={4} sx={{ paddingY: 3, textAlign: "center" }}>
          <Typography>I'm on top!</Typography>
        </Paper>
      </Grid>
      <Grid size={12} sx={{position: "relative", top: -60, zIndex: 0}}>
        <Paper elevation={2} sx={{ paddingTop: 17, paddingBottom: 10, textAlign: "center"}}>
          <Typography>I'm on the bottom!</Typography>
        </Paper>
      </Grid>
    </Grid> */}

      {/* ~~ position: absolute ~~
    ~~ This *will* render the Grid items on top of each other, but it breaks with padding ~~
    Specifically, the width of the absolute psotioned Grid item will extend past the padding on the right side, even though it respectes the left padding

    <Grid 
      container 
      columns={12} 
      sx={{ padding: 5}}
    >
      <Grid size={12} sx={{zIndex: 10}}>
        <Paper elevation={4} sx={{ paddingY: 3, textAlign: "center" }}>
          <Typography>I'm on top!</Typography>
        </Paper>
      </Grid>
      <Grid size={1} sx={{position: "absolute", zIndex: 0}}>
        <Paper elevation={2} sx={{ paddingTop: 17, paddingBottom: 10, textAlign: "center"}}>
          <Typography>I'm on the bottom!</Typography>
        </Paper>
      </Grid>
    </Grid> */}

      {/* ~~ This will still render the Grid items next to each other in ~~

    <Grid container columns={12} sx={{ padding: 5}}>
      <Grid size={12} sx={{zIndex: 10}}>
        <Paper elevation={4} sx={{ paddingY: 3, textAlign: "center" }}>
          <Typography>I'm on top!</Typography>
        </Paper>
      </Grid>
      <Grid size={12} sx={{zIndex: 0}}>
        <Paper elevation={2} sx={{ paddingTop: 13, paddingBottom: 10, textAlign: "center"}}>
          <Typography>I'm on the bottom!</Typography>
        </Paper>
      </Grid>
    </Grid> */}

      {/* ~~ This will render the Grid containers next to each other ~~

    <Grid container columns={12} sx={{ padding: 5, zIndex: 10}}>
      <Grid size={12} sx={{}}>
        <Paper elevation={4} sx={{ paddingY: 3, textAlign: "center" }}>
          <Typography>I'm on top!</Typography>
        </Paper>
      </Grid>
    </Grid>
    <Grid container columns={12} sx={{ padding: 5, zIndex: 0}}>
      <Grid size={12} sx={{}}>
        <Paper elevation={2} sx={{ paddingTop: 13, paddingBottom: 10, textAlign: "center"}}>
          <Typography>I'm on the bottom!</Typography>
        </Paper>
      </Grid>
    </Grid> */}
    </ThemeProvider>
  );
};

export default App;
