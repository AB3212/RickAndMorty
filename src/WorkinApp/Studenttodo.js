import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const subjects = ['MATHS', 'PS', 'CPPM', 'DPA' , 'OS']; // predefined subjects
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({ name: '', marks: {} });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStudent({
      ...currentStudent,
      [name]: value,
    });
  };

  const handleMarksChange = (subject, value) => {
    setCurrentStudent({
      ...currentStudent,
      marks: {
        ...currentStudent.marks,
        [subject]: parseInt(value, 10) || 0,
      },
    });
  };

  const handleAddStudent = () => {
    if (isEditing) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = currentStudent;
      setStudents(updatedStudents);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setStudents([...students, currentStudent]);
    }
    setCurrentStudent({ name: '', marks: {} });
  };

  const handleEditStudent = (index) => {
    setCurrentStudent(students[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const calculateTotalAndPercentage = (students) => {
    return students.map((student) => {
      const marksArray = Object.values(student.marks);
      const totalMarks = marksArray.reduce((acc, mark) => acc + mark, 0);
      const percentage = (totalMarks / (marksArray.length * 100)) * 100;
      return { ...student, total: totalMarks, percentage };
    });
  };

  const calculatedStudents = calculateTotalAndPercentage(students);

  return (
    <div className='container'>
      <h1>Student Subject Details</h1>
      <label className='letter-spacing fs-3'>Name :</label>
      <input
        className='mb-3 fs-4'
        type="text"
        name="name"
        value={currentStudent.name}
        onChange={handleInputChange}
        placeholder="Student Name"
      />
      
      {subjects.map((subject) => (
        <div className='letter-spacing' key={subject}>
          <label className='fs-3'>{subject} :</label>
          <input
            
            className='mb-3 fs-4'
            value={currentStudent.marks[subject] || ''}
            onChange={(e) => handleMarksChange(subject, e.target.value)}
            placeholder={` Enter a Marks`}
          />
        </div>
      ))}
      <button className='bttn-orange fs-5' onClick={handleAddStudent}>{isEditing ? 'UPDATE' : 'SUBMIT'}</button>

      <h2>Records</h2>
      <table className='table table-bordered  letter-spacing'>
        <thead className='fs-4 table-secondary'>
          <tr className='text-center'>
            <th>Name</th>
            {subjects.map((subject) => (
              <th className="ps-4 pe-4" key={subject}>{subject}</th>
            ))}
            <th>Total</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='fs-4 text-center'>
          {calculatedStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              {subjects.map((subject) => (
                <td key={subject}>{student.marks[subject] || 0}</td>
              ))}
              <td>{student.total}</td>
              <td>{student.percentage.toFixed(2)}%</td>
              <td>
                <button className='btn btn-dark' onClick={() => handleEditStudent(index)}>Edit</button>
                <button className='btn btn-danger ms-2 ' onClick={() => handleDeleteStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
