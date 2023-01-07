import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ students, setstudents, setIsAdding }) {

    const [fullName, setfullName] = useState('');
    const [rollNo, setrollNo] = useState('');
    const [checkIn, setcheckIn] = useState('');
    const [checkOut, setcheckOut] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!fullName || !rollNo || !checkIn || !checkOut || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = students.length + 1;
        const newStudent = {
            id,
            fullName,
            rollNo,
            checkIn,
            checkOut,
            date
        }
        students.push(newStudent);
        setstudents(students);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${fullName} ${rollNo}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Mark Attendance</h1>
                <label htmlFor="fullName">First Name</label>
                <input
                    id="fullName"
                    type="text"
                    ref={textInput}
                    name="fullName"
                    value={fullName}
                    onChange={e => setfullName(e.target.value)}
                />
                <label htmlFor="rollNo">Roll Number</label>
                <input
                    id="rollNo"
                    type="number"
                    name="rollNo"
                    value={rollNo}
                    onChange={e => setrollNo(e.target.value)}
                />
                <label htmlFor="checkIn">checkIn</label>
                <input
                    id="checkIn"
                    type="time"
                    name="checkIn"
                    value={checkIn}
                    onChange={e => setcheckIn(e.target.value)}
                />
                <label htmlFor="checkOut">checkOut ($)</label>
                <input
                    id="checkOut"
                    type="time"
                    name="checkOut"
                    value={checkOut}
                    onChange={e => setcheckOut(e.target.value)}
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
                    <input type="submit" value="Mark" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add