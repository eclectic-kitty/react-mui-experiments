import * as React from "react";
import { animated, useSpring } from "@react-spring/web";
import {
  CssBaseline,
  Grid2 as Grid,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const auTheme = createTheme({
  palette: {
    background: {
      default: "#FEF6F7",
      paper: "#F1E9EE",
    },
    text: {
      primary: "#383649",
    },
  },
});

// Wrapping the Paper in the animated component
const AnimatedPaper = animated(Paper);

const App = () => {
  // Creating the top paper's animation
  const [topSprings, topSpringsApi] = useSpring(() => ({
    // Note that we can seemingly animate any css property?
    // Here using left instead of x to account for the margin
    from: {
      left: 0,
      opacity: 0,
    },
  }));

  const handleTopClick = () => {
    topSpringsApi.start({
      from: {
        left: 0,
        opacity: 0,
      },
      to: {
        left: 100,
        opacity: 1,
      },
    });
  };

  // Creating the bottom Gridded paper's animation
  const [bottomSprings, bottomSpringsApi] = useSpring(() => ({
    from: {
      left: 700,
    },
  }));

  const handleBottomClick = () => {
    bottomSpringsApi.start({
      from: {
        left: 700,
      },
      to: {
        left: 0,
      },
    });
  };

  return (
    <ThemeProvider theme={auTheme}>
      <CssBaseline>
        <AnimatedPaper
          // It looks like we can use both the sx and the style prop...
          sx={{
            position: "relative",
            textAlign: "center",
            width: 1100,
            margin: 2,
            padding: 1,
          }}
          // But the animation still has to be provided via the style prop
          // This means anything animation related can not be theme aware
          style={{
            ...topSprings,
          }}
        >
          <Typography variant={"h2"}>
            I've been here the whole time, pardner :p
          </Typography>
        </AnimatedPaper>
        <Paper sx={{ textAlign: "center", width: 300, margin: 2, padding: 1 }}>
          <Typography variant={"h2"}>Howdy!</Typography>
        </Paper>

        <Grid container spacing={2} sx={{ margin: 2 }}>
          <Grid size={8}>
            <Paper sx={{ textAlign: "center", padding: 2 }}>
              <Typography variant={"h3"}>hi</Typography>
            </Paper>
          </Grid>
          <Grid size={2}>
            <AnimatedPaper
              sx={{
                position: "relative",
                textAlign: "center",
                padding: 2,
                height: 300,
              }}
              style={{
                ...bottomSprings,
              }}
            >
              <Typography variant={"h3"}>hewwo</Typography>
            </AnimatedPaper>
          </Grid>
        </Grid>

        {/* Not sure why when we provide the function to onClick, it doesn't need () */}
        <Button variant="contained" onClick={handleTopClick} sx={{ margin: 2 }}>
          Hey, something's missin'...
        </Button>
        <Button
          variant="contained"
          onClick={handleBottomClick}
          sx={{ margin: 2 }}
        >
          But will it Grid?
        </Button>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
