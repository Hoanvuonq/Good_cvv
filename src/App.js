import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/main.scss';

//Components//
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import InformationUser from './Components/Pages/InformationUser';

import Nav from './Components/Layouts/Nav';
import Side from './Components/Layouts/Side';
import Modal from './Components/Layouts/Modal';
import ModalLogout from './Components/Layouts/ModalLogout';

function App() {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Login" element={<Login />} />
                    <Route exact path="/Register" element={<Register />} />
                    <Route exact path="/InformationUser" element={<InformationUser />} />
                    <Route exact path="/Nav" element={<Nav />} />
                    <Route exact path="/Side" element={<Side />} />
                    <Route exact path="/Modal" element={<Modal />} />
                    <Route exact path="/ModalLogout" element={<ModalLogout />} />
                </Routes>
            </Fragment>
        </Router>
    );
}

export default App;
