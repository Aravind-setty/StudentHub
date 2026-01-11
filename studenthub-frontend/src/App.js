import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddStudent from './pages/AddStudent';
import StudentDetails from './pages/StudentDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/add" element={<AddStudent />} />
                    <Route path="/student/:id" element={<StudentDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;