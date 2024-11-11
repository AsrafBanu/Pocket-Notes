// src/components/NoteInput.js

import React, { useState } from 'react';
import './NoteInput.css';

function NoteInput({ onAddNote }) {
    const [noteText, setNoteText] = useState('');

    const handleAddNote = () => {
        if (noteText.trim()) {
            onAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className="note-input">
            <input
                type="text"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Type your note here..."
                onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
            />
            <button onClick={handleAddNote}>➔</button>
        </div>
    );
}

export default NoteInput;
