import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md';
import './NoteCard.scss'; // Import the SCSS file if you have styles

function NoteCard({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) {
    return (
        <div className="note-card">
            <div className="note-header">
                <div className="note-title">
                    <h6>{title}</h6>
                    <span>{date}</span>
                </div>
                <MdOutlinePushPin className={isPinned ? "pinned" : ""} onClick={onPinNote} />
            </div>
            <p>{content?.slice(0, 60)}{content?.length > 60 ? "..." : ""}</p>
            <div className="note-footer">
                <div className="note-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="note-actions">
                    <MdCreate onClick={onEdit} className="edit-icon" />
                    <MdDelete onClick={onDelete} className="delete-icon" />
                </div>
            </div>
        </div>
    );
}

export default NoteCard;
