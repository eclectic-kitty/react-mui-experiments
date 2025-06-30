import { Typography } from "@mui/material";

const paraStyles = { textIndent: "2em", textAlign: "justify" };
const Paragraph = ({ children }) => (
  <Typography variant="body1" paragraph gutterBottom sx={paraStyles}>
    {children}
  </Typography>
);
export default Paragraph;
