import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStudent } from '../services/api';
import { UserPlus, ArrowLeft } from 'lucide-react';

const AddStudent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        rollNumber: "",
        department: "",
        email: "",
        phone: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createStudent(formData);
            navigate("/");
        } catch (err) {
            setError(err.message || "Error creating student. Roll number might already exist.");
        }
    };

    return (
        <div className="container" style={{ maxWidth: '600px' }}>
            <button className="btn mb-4" onClick={() => navigate("/")}>
                <ArrowLeft size={20} />
                Back to Dashboard
            </button>

            <div className="glass-card">
                <h2 className="mb-4">Register New Student</h2>

                {error && <div style={{ color: 'var(--danger)', marginBottom: '1rem' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Roll Number</label>
                        <input
                            type="text"
                            name="rollNumber"
                            className="form-control"
                            required
                            value={formData.rollNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department</label>
                        <input
                            type="text"
                            name="department"
                            className="form-control"
                            required
                            value={formData.department}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email (Optional)</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone (Optional)</label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                        <UserPlus size={20} />
                        Add Student
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
