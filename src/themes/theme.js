import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4a3d35',
           // light: 'rgba(109,109,109)'

        },
        secondary: {
            main: '#b17862',
          //  dark: '#4a3d35'
        },
        background: {
            paper: 'rgba(248,248,248)'
        },
        text: {
            primary: '#4a3d35'
        }

    },
    typography: {
        fontFamily: `'Fira Sans', sans-serif`,
    }
});

export default theme;