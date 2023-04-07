import './App.css';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main';
import theme from './themes/theme';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Layout from './components/Layout/Layout';
import Category from './components/Category/Category';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'/'} index element={<Main/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/contacts'} element={<Contacts/>}/>
                        <Route path={'/category/:id'} element={<Category/>}/>
                    </Route>
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;