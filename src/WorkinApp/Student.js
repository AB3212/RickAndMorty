import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    const [students, setStudents] = useState([
        { id: 1, name: 'Aryan Balar', subject1: 85, subject2: 78, subject3: 90 },
        { id: 2, name: 'Yash Kathrotiya', subject1: 92, subject2: 88, subject3: 95 },
        { id: 3, name: 'Tirth Bhingradiya', subject1: 78, subject2: 85, subject3: 80 },
        { id: 4, name: 'Dharm Bhingradiya', subject1: 88, subject2: 90, subject3: 92 },
        { id: 5, name: 'Bhavin Ladhani', subject1: 70, subject2: 75, subject3: 80 }
    ]);

    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editSubject1, setEditSubject1] = useState('');
    const [editSubject2, setEditSubject2] = useState('');
    const [editSubject3, setEditSubject3] = useState('');

    const calculateTotal = (sub1, sub2, sub3) => {
        return sub1 + sub2 + sub3;
    };

    const calculatePercentage = (total) => {
        return (total / 300 * 100).toFixed(2);
    };

    const handleEdit = (student) => {
        setEditId(student.id);
        setEditName(student.name);
        setEditSubject1(student.subject1);
        setEditSubject2(student.subject2);
        setEditSubject3(student.subject3);
    };

    const handleSave = () => {
        const updatedStudents = students.map(student =>
            student.id === editId
                ? { 
                    ...student, 
                    name: editName, 
                    subject1: editSubject1, 
                    subject2: editSubject2, 
                    subject3: editSubject3 
                }
                : student
        );
        setStudents(updatedStudents);
        setEditId(null);
        setEditName('');
        setEditSubject1('');
        setEditSubject2('');
        setEditSubject3('');
    };

    const handleCancel = () => {
        setEditId(null);
        setEditName('');
        setEditSubject1('');
        setEditSubject2('');
        setEditSubject3('');
    };

    return (
        <div className="container mt-5">
            <h2 className='text-center mb-5'>Student Result Table</h2>
            <table className="table " border={1}>
                <thead>
                    <tr className='text-center'   >
                       
                        <th>ID</th>
                        <th>Name</th>
                        <th>CPPM</th>
                        <th>Maths</th>
                        <th>DPPA</th>
                        <th>Total</th>
                        <th>Percentage</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {students.map((student) => {
                        const total = calculateTotal(student.subject1, student.subject2, student.subject3);
                        const percentage = calculatePercentage(total);
                        return (
                            <tr key={student.id} className='text-center' >
                                <td>{student.id}</td>
                                <td>
                                    {student.id === editId ? (
                                        <input
                                            type="text"
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                        />
                                    ) : (
                                        student.name
                                    )}
                                </td>
                                <td>
                                    {student.id === editId ? (
                                        <input
                                            
                                            value={editSubject1}
                                            onChange={(e) => setEditSubject1(Number(e.target.value))}
                                        />
                                    ) : (
                                        student.subject1
                                    )}
                                </td>
                                <td>
                                    {student.id === editId ? (
                                        <input
                                            
                                            value={editSubject2}
                                            onChange={(e) => setEditSubject2(Number(e.target.value))}
                                        />
                                    ) : (
                                        student.subject2
                                    )}
                                </td>
                                <td>
                                    {student.id === editId ? (
                                        <input
                                            
                                            value={editSubject3}
                                            onChange={(e) => setEditSubject3(Number(e.target.value))}
                                        />
                                    ) : (
                                        student.subject3
                                    )}
                                </td>
                                <td>{total}</td>
                                <td>{percentage}%</td>
                                <td onBeforeInput={2}>
                                    {student.id === editId ? (
                                        <>
                                            <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
                                            <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                                        </>
                                    ) : (
                                        <button className="btn btn-dark" onClick={() => handleEdit(student)}>Edit</button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;