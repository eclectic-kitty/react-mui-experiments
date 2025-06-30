import { Typography } from "@mui/material";

const subHeadingStyles = {
  alignSelf: { xs: "flex-start", md: "center" },
};
const SubHeading = ({ children }) => (
  <Typography variant="h5" component="h2" gutterBottom sx={subHeadingStyles}>
    {children}
  </Typography>
);
export default SubHeading;
