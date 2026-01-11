import React from 'react';
import { Trash2, Edit3, User, Database, Contact, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentCard = ({ student, onDelete }) => {
    return (
        <div className="glass-card student-card">
            <div>
                <h3>{student.name}</h3>
                <div className="info">
                    <User size={14} />
                    <span>Roll: {student.rollNumber}</span>
                </div>
                <div className="info">
                    <Database size={14} />
                    <span>Dept: {student.department}</span>
                </div>
                {student.email && (
                    <div className="info">
                        <Contact size={14} />
                        <span>{student.email}</span>
                    </div>
                )}
            </div>

            <div className="actions">
                <Link to={`/student/${student._id}`} className="btn btn-icon">
                    <Eye size={18} />
                </Link>
                <button className="btn btn-icon" onClick={() => (window.alert("Edit feature coming soon!"))}>
                    <Edit3 size={18} />
                </button>
                <button className="btn btn-icon btn-danger" onClick={() => onDelete(student._id)}>
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
};

export default StudentCard;
