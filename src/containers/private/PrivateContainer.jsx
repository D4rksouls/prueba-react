import { ThemeProvider } from "@emotion/react";
import { createTheme, Box, CssBaseline, Unstable_Grid2 as Grid } from "@mui/material";
import { Outlet } from 'react-router-dom';
import NavBar from "@components/generic/nav-bar/NavBar";
import ProgressBar from "@components/generic/ProgressBar";



export default function PrivateContainer() { 
    const theme = createTheme();
  const param = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];
    return (
        <ThemeProvider theme={theme} >
        {<ProgressBar />}
        <header>
        <NavBar sections={param} title="Blog"/>
        </header>
        <Box component="main" className="flex">
          <Grid container className="flex-auto items-center justify-center bg-wave w-[700px] h-[700px]">
            <Grid xs={12} lg={6} className="items-center flex justify-center ">
            <Outlet />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    );
}