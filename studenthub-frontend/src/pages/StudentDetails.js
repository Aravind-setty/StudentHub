import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentById } from '../services/api';
import { ArrowLeft, User, Mail, Phone, Hash, BookOpen, Calendar } from 'lucide-react';

const StudentDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const data = await getStudentById(id);
                setStudent(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchStudent();
    }, [id]);

    if (loading) return <div className="loading">Loading student details...</div>;
    if (!student) return <div className="container">Student not found.</div>;

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <button className="btn mb-4" onClick={() => navigate("/")}>
                <ArrowLeft size={20} />
                Back to Dashboard
            </button>

            <div className="glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '3rem'
                    }}>
                        {student.name.charAt(0)}
                    </div>
                    <div>
                        <h1>{student.name}</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Student Profile</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div className="info-group">
                        <label style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Roll Number</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', marginTop: '0.2rem' }}>
                            <Hash size={18} color="var(--primary)" />
                            {student.rollNumber}
                        </div>
                    </div>
                    <div className="info-group">
                        <label style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Department</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', marginTop: '0.2rem' }}>
                            <BookOpen size={18} color="var(--primary)" />
                            {student.department}
                        </div>
                    </div>
                    <div className="info-group">
                        <label style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Email</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', marginTop: '0.2rem' }}>
                            <Mail size={18} color="var(--primary)" />
                            {student.email || "N/A"}
                        </div>
                    </div>
                    <div className="info-group">
                        <label style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Phone</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', marginTop: '0.2rem' }}>
                            <Phone size={18} color="var(--primary)" />
                            {student.phone || "N/A"}
                        </div>
                    </div>
                    <div className="info-group">
                        <label style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Joined On</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', marginTop: '0.2rem' }}>
                            <Calendar size={18} color="var(--primary)" />
                            {new Date(student.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
