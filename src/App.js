// src/App.js

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NotesArea from './components/NotesArea';
import NoteInput from './components/NoteInput';
import NewGroupModal from './components/NewGroupModal';
import './App.css';

function App() {
    const [groups, setGroups] = useState([]);
    const [currentGroup, setCurrentGroup] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Load groups and notes from localStorage
    useEffect(() => {
        const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
        setGroups(storedGroups);
        if (storedGroups.length > 0) setCurrentGroup(storedGroups[0].id);
    }, []);

    // Save groups to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('groups', JSON.stringify(groups));
    }, [groups]);

    const addGroup = (newGroup) => {
        setGroups([...groups, newGroup]);
        setCurrentGroup(newGroup.id);
    };

    const addNote = (noteText) => {
        const updatedGroups = groups.map(group => {
            if (group.id === currentGroup) {
                const updatedNotes = [...group.notes, { text: noteText, date: new Date().toLocaleString() }];
                return { ...group, notes: updatedNotes };
            }
            return group;
        });
        setGroups(updatedGroups);
    };

    return (
        <div className="app">
            <Sidebar groups={groups} setCurrentGroup={setCurrentGroup} openModal={() => setIsModalOpen(true)} />
            <NotesArea currentGroup={groups.find(group => group.id === currentGroup)} />
            <NoteInput onAddNote={addNote} />
            {isModalOpen && <NewGroupModal closeModal={() => setIsModalOpen(false)} onCreateGroup={addGroup} />}
        </div>
    );
}

export default App;
