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
            //default: 'whitesmoke',
            paper: 'rgba(246,246,246)'
        },

    },
    typography: {
        fontFamily: `'Fira Sans', sans-serif`,
    }
});

export default theme;