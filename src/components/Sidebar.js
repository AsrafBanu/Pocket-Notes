// src/components/Sidebar.js

import React from 'react';
import './Sidebar.css';

function Sidebar({ groups, setCurrentGroup, openModal }) {
    return (
        <div className="sidebar">
            <h2>Pocket Notes</h2>
            {groups.map(group => (
                <div key={group.id} onClick={() => setCurrentGroup(group.id)} className="group-item">
                    <span className="group-icon" style={{ backgroundColor: group.color }}>{group.name[0]}</span>
                    {group.name}
                </div>
            ))}
            <button className="add-group-button" onClick={openModal}>+ Add Group</button>
        </div>
    );
}

export default Sidebar;
