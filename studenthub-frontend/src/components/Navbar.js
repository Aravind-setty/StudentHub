import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserPlus, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">
                <GraduationCap size={32} />
                <span>StudentHub</span>
            </Link>
            <div className="nav-links">
                <Link to="/" className="nav-link">
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>
                <Link to="/add" className="nav-link">
                    <UserPlus size={20} />
                    Add Student
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
