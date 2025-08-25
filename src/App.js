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
  const [springs, springsApi] = useSpring(() => ({
    // Note that we can seemingly animate any css property?
    // Here using left instead of x to account for the margin
    from: { left: 0, opacity: 0 },
  }));

  const handleClick = () => {
    springsApi.start({
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
            ...springs,
          }}
        >
          <Typography variant={"h2"}>
            I've been here the whole time, pardner :p
          </Typography>
        </AnimatedPaper>
        <Paper sx={{ textAlign: "center", width: 300, margin: 2, padding: 1 }}>
          <Typography variant={"h2"}>Howdy!</Typography>
        </Paper>
        {/* Not sure why when we provide the function to onClick, it doesn't need () */}
        <Button variant="contained" onClick={handleClick}>
          Hey, something's missin'...
        </Button>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
