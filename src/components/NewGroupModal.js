// src/components/NewGroupModal.js

import React, { useState } from 'react';
import './NewGroupModal.css';

function NewGroupModal({ closeModal, onCreateGroup }) {
    const [groupName, setGroupName] = useState('');
    const [color, setColor] = useState('#000000');

    const handleCreateGroup = () => {
        if (groupName.trim()) {
            const newGroup = { id: Date.now(), name: groupName, color, notes: [] };
            onCreateGroup(newGroup);
            closeModal();
        }
    };

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Create New Group</h3>
                <input type="text" placeholder="Enter group name" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <button onClick={handleCreateGroup}>Create</button>
            </div>
        </div>
    );
}

export default NewGroupModal;
