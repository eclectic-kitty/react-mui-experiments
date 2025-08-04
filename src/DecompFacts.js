import * as React from "react";
import { Grid2 as Grid, Paper, Typography, Button } from "@mui/material";

const DecompFacts = () => {
  return (
    <Grid container size={8} columns={8} sx={{ width: "100%" }}>
      <Paper elevation={4}>
        <Grid size={8} offset={0}>
          <Paper elevation={2}>
            <Typography variant="h3" component="h2" align="center">
              decomposition facts!!!
            </Typography>
          </Paper>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DecompFacts;
