import './App.css';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main';
import theme from './themes/theme';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Category from './components/Category/Category';
import React from 'react';
import Loader from './components/Loader/Loader';
import MainAdmin from './components/Admin/MainAdmin';

const Layout = React.lazy(() => import('./components/Layout/Layout'));
const AdminLayout = React.lazy(() => import('./components/Admin/AdminLayout'));

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route element={<React.Suspense fallback={<Loader/>}>
                        <Layout/>
                    </React.Suspense>}>
                        <Route path={'/'} index element={<Main/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/contacts'} element={<Contacts/>}/>
                        <Route path={'/category/:id'} element={<Category/>}/>
                    </Route>
                    <Route element={<React.Suspense fallback={<Loader/>}>
                        <AdminLayout/>
                    </React.Suspense>}>
                        <Route path={'/admin'} element={<MainAdmin/>}/>
                    </Route>
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;