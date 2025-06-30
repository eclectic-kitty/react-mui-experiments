import { Stack } from "@mui/material";

const textBlockStyles = {
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "26px",
  paddingLeft: { xs: "16px", md: "96px" },
  paddingRight: { xs: "16px", md: "96px" },
};

const TextBlock = ({ children }) => (
  <Stack sx={textBlockStyles}>{children}</Stack>
);
export default TextBlock;
