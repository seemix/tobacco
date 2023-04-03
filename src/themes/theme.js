import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#b17862',
        },
        secondary: {
            main: '#212121'
        }
    },
    typography: {
        fontFamily: `'Fira Sans', sans-serif`,
    }
});

export default theme;