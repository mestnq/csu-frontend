import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/main';
import Admin from '@Pages/admin/admin';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
};

export default App;
