import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Questions from './pages/Questions/Questions';
import Askquestions from './pages/Askquestions/Askquestions';
import DisplayQuestions from './pages/Questions/DisplayQuestions';
import { Tags } from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import UsersProfie from './pages/Profile/UsersProfie';

function AllRoutes() {
    return (
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/Auth' element={<Auth/>} />
            <Route  path='/Questions' element={<Questions/>} />
            <Route  path='/AskQuestion' element={<Askquestions/>} />
            <Route path='/Questions/:id' element={<DisplayQuestions />} />
            <Route path='/Tags' element={<Tags />}></Route>
            <Route path='/Users' element={<Users />}></Route>
            <Route path='/Users/:id' element={<UsersProfie/>}></Route>
        </Routes>
    )
}

export default AllRoutes