import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { studentsData } from '../../data';

function Dashboard() {

    const [students, setstudents] = useState(studentsData);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [Student] = students.filter(Student => Student.id === id);

        setSelectedStudent(Student);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [Student] = students.filter(Student => Student.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${Student.fullName} ${Student.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setstudents(students.filter(Student => Student.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        students={students}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    students={students}
                    setstudents={setstudents}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    students={students}
                    selectedStudent={selectedStudent}
                    setstudents={setstudents}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;