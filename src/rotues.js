import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from './ContactForm';

function Ankit() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<ContactForm/>}/>
            </Routes>
        </Router>
    )
}
export default Ankit;