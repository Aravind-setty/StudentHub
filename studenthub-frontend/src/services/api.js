const API_URL = "http://localhost:5000/api/students";

const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Something went wrong");
    }
    return response.json();
};

export const getAllStudents = () =>
    fetch(API_URL).then(handleResponse);

export const getStudentById = (id) =>
    fetch(`${API_URL}/${id}`).then(handleResponse);

export const getStudentByRollNumber = (roll) =>
    fetch(`${API_URL}/roll/${roll}`).then(handleResponse);

export const searchStudentsByName = (name) =>
    fetch(`${API_URL}/search?name=${name}`).then(handleResponse);

export const createStudent = (studentData) =>
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
    }).then(handleResponse);

export const updateStudent = (id, studentData) =>
    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
    }).then(handleResponse);

export const deleteStudent = (id) =>
    fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    }).then(handleResponse);
