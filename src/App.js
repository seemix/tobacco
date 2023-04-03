import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Content from './components/Content/Content';
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material';

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header/>
                <Slider/>
                <Content/>
            </ThemeProvider>
        </div>
    );
}

export default App;