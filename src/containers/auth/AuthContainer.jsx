import { ThemeProvider } from "@emotion/react";
import { createTheme, Box, CssBaseline, Unstable_Grid2 as Grid } from "@mui/material";
import { Navigate, Outlet } from 'react-router-dom';
import LoginPage from "@pages/auth/LoginPage";
import ProgressBar from "@components/generic/ProgressBar";
import { Welcome } from "@components/generic/welcome/Welcome";


export default function AuthContainer() { 
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
        {<ProgressBar />}
        <CssBaseline />
        <Box component="main" className="flex flex-auto overflow-hidden pt-3.5">
          <Grid container className="flex-auto">
            <Grid xs={12} lg={6} className="bg-gray-100 flex flex-col relative">
              <Welcome />
              
            </Grid>
            <Grid xs={12} lg={6} className="items-center text-white flex justify-center img { max-w-full }">
            <Outlet />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    );
}