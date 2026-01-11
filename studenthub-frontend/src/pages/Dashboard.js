import React, { useState, useEffect } from 'react';
import { getAllStudents, deleteStudent, searchStudentsByName, getStudentByRollNumber } from '../services/api';
import StudentCard from '../components/StudentCard';
import { Search, Loader2 } from 'lucide-react';

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchType, setSearchType] = useState("name");

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const data = await getAllStudents();
            setStudents(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try {
                await deleteStudent(id);
                setStudents(students.filter(s => s._id !== id));
            } catch (err) {
                alert("Error deleting student");
            }
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm) {
            fetchStudents();
            return;
        }

        try {
            setLoading(true);
            if (searchType === "name") {
                const data = await searchStudentsByName(searchTerm);
                setStudents(data);
            } else if (searchType === "roll") {
                const data = await getStudentByRollNumber(searchTerm);
                setStudents([data]); // Wrap in array as it returns single object
            }
        } catch (err) {
            setStudents([]);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="flex-between mb-4">
                <h1>Student Dashboard</h1>
                <div className="text-secondary">{students.length} Students Total</div>
            </div>

            <form className="search-container" onSubmit={handleSearch}>
                <select
                    className="form-control"
                    style={{ width: '150px' }}
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="roll">Roll Number</option>
                </select>
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder={`Search by ${searchType}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                    <Search size={20} />
                    Search
                </button>
            </form>

            {loading ? (
                <div className="loading">
                    <Loader2 className="animate-spin" size={48} />
                    <p>Loading students...</p>
                </div>
            ) : (
                <div className="student-grid">
                    {students.length > 0 ? (
                        students.map(student => (
                            <StudentCard
                                key={student._id}
                                student={student}
                                onDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <div className="glass-card text-center" style={{ gridColumn: '1 / -1' }}>
                            <p>No students found.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
