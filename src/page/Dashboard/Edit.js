import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudent, setstudents, setIsEditing }) {

    const id = selectedStudent.id;

    const [fullName, setFullName] = useState(selectedStudent.fullName);
    const [rollNo, setRollNo] = useState(selectedStudent.rollNo);
    const [checkIn, setCheckIn] = useState(selectedStudent.checkIn);
    const [checkOut, setCheckOut] = useState(selectedStudent.checkOut);
    const [date, setDate] = useState(selectedStudent.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!fullName || !rollNo || !checkIn || !checkOut || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const Student = {
            id,
            fullName,
            rollNo,
            checkIn,
            checkOut,
            date
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, Student);
                break;
            }
        }

        setstudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: ` ${Student.rollNo}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Student</h1>
                <label htmlFor="fullName">FullName</label>
                <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />
                <label htmlFor="rollNo">Roll Number</label>
                <input
                    id="rollNo"
                    type="number"
                    name="rollNo"
                    value={rollNo}
                    onChange={e => setRollNo(e.target.value)}
                />
                <label htmlFor="checkIn">CheckIn</label>
                <input
                    id="checkIn"
                    type="time"
                    name="checkIn"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                />
                <label htmlFor="checkOut">CheckOut</label>
                <input
                    id="checkOut"
                    type="time"
                    name="checkOut"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit