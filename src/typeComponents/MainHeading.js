import { Typography } from "@mui/material";

const MainHeading = ({ children }) => (
  <Typography variant="h4" component="h1" gutterBottom>
    {children}
  </Typography>
);
export default MainHeading;
