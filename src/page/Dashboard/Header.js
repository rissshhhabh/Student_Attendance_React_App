import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1 style={{ color: 'blue' }}>Student Attendance App</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Mark Attendance</button>
            </div>
        </header>
    )
}

export default Header
