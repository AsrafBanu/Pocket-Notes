
// src/components/NotesArea.js

import React from 'react';
import './NotesArea.css';
import welcomeImage from '../assets/welcome.png';

function NotesArea({ currentGroup }) {
    if (!currentGroup) {
        return (
            <div className="notes-area">
                <center><h3>Welcome to Pocket Notes</h3></center>
                <img src={welcomeImage} alt="Welcome to Pocket Notes" className="welcome-image" />
            </div>
        );
    }

    return (
        <div className="notes-area">
            <h2>{currentGroup.name}</h2>
            <div className="notes-list">
                {currentGroup.notes.map((note, index) => (
                    <div key={index} className="note">
                        <p>{note.text}</p>
                        <span className="note-date">{note.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotesArea;
