import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NoteCard from '../../components/Cards/NoteCard';
import { MdAdd } from 'react-icons/md';
import './Dashboard.scss';

function Dashboard() {
  const noteData = {
    title: "Sample Note Title",
    date: "2024-10-16",
    content: "This is a sample note content that provides a brief overview of the note's details. It will be truncated for display purposes.",
    tags: ["important", "work", "reminder"],
    isPinned: false,
    onEdit: () => console.log('Edit note'),
    onDelete: () => console.log('Delete note'),
    onPinNote: () => console.log('Pin note'),
  };

  return (
    <div className="dashboard">
      <Navbar /> 
      <NoteCard
        title={noteData.title}
        date={noteData.date}
        content={noteData.content}
        tags={noteData.tags}
        isPinned={noteData.isPinned}
        onEdit={noteData.onEdit}
        onDelete={noteData.onDelete}
        onPinNote={noteData.onPinNote}
      />

      <button className="add-button" onClick={() => {}}>
        <MdAdd className="add-icon" />
      </button>
    </div>
  );
}

export default Dashboard;
