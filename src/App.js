import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button'

import TextBlock from "./typeComponents/TextBlock";
import MainHeading from "./typeComponents/MainHeading";
import Paragraph from "./typeComponents/Paragraph";
import SubHeading from "./typeComponents/SubHeading";

const auTheme = createTheme({
  palette: {
    twilight: {
      main: '#656284',
      light: '#AFADC2',
      dark: '#3A3659',
      contrastText: '#D7D6E1',
    },
    blackberryJam: {
      main: '#B689A2',
      light: '#E2D0DA',
      dark: '#784A63',
      contrastText: '#F7F2F5',
    }
  }
})

export default function App() {
  return (
    <ThemeProvider theme={auTheme}>
      <TextBlock sx={{bgcolor: 'twilight.light'}}>
        <MainHeading> Aurora's Test Page?</MainHeading>
        <SubHeading> u get a bunch of decomp facts app.</SubHeading>

        <Paragraph>Did you know that after you die, a lot of your tissues liquefy. This is not due to decomposition, but due to an built-in mechanism in your cells?</Paragraph>

        <Button variant="contained" color="blackberryJam">Guau, great fact!</Button>
      </TextBlock> 
      </ThemeProvider>
  );
}
