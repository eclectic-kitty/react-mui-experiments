import * as React from "react";
import { animated, useSpring } from "@react-spring/web";
import { CssBaseline, Paper, Button, Typography } from "@mui/material";
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

// Creating the animation
const App = () => {
  const springs = useSpring({
    // Note that we can seemingly animate any css property?
    // Here using left instead of x to account for the margin
    from: {
      left: 0,
    },
    to: {
      left: 100,
    },
  });

  return (
    <ThemeProvider theme={auTheme}>
      <CssBaseline>
        <AnimatedPaper
          // Because this uses the style prop, not sx, it is not theme aware
          style={{
            position: "relative",
            textAlign: "center",
            width: 500,
            // note the margin and padding in pixels, as opposed to the 8-pixel MUI grid
            margin: 16,
            padding: 8,
            ...springs,
          }}
        >
          <Typography variant={"h2"}>I'm moving!</Typography>
        </AnimatedPaper>
        <Paper sx={{ textAlign: "center", width: 500, margin: 2, padding: 1 }}>
          <Typography variant={"h2"}>I'm normal :p</Typography>
        </Paper>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
