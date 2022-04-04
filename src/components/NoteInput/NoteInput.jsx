import React, { useState } from 'react';
import ReactQuill from "react-quill";
import { useNotes } from 'context';
import "react-quill/dist/quill.snow.css";
import "./NoteInput.css";

const noteInputSetupCriteria = {
    toolbar: [
        [{ header: [3, 4, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }]
    ]
}


const NoteInput = ({ closeInput }) => {
    const initialNoteData = {
        title: "",
        content: ""
    }
    const [notesInputData, setNotesInputData] = useState(initialNoteData);
    const { notesDispatch } = useNotes();

    return (
        <>
            <div className="note-form-container modal-format">
                <div className="note-input-container">
                    <label className="gentle-input-label" htmlFor='notesTitle'>
                        Title
                    </label>
                    <input
                        id="notesTitle"
                        type="text"
                        className="gentle-input"
                        placeholder="Type Here..."
                        value={notesInputData.title}
                        onChange={(e) => setNotesInputData(prev => ({ ...prev, title: e.target.value }))}
                    />
                </div>
                <div className="note-content-editor">
                    <ReactQuill
                        placeholder='ADD YOUR NOTES HERE..'
                        modules={noteInputSetupCriteria}
                        value={notesInputData.content}
                        onChange={(e) => {
                            setNotesInputData((prev) => ({ ...prev, content: e }));
                        }}
                    />
                </div>
                <div className="gentle-flex flexspace-between">
                    <div className='gentle-flex-gap flex-wrap'></div>
                    <div className='gentle-flex-gap flex-wrap'>
                        <button className="btn btn-primary">
                            CANCEL
                        </button>
                        <button className="btn btn-secondary"
                            onClick={() => {
                                notesDispatch({
                                    type: "ADD_NOTES",
                                    payload: {
                                        title: notesInputData.title,
                                        content: notesInputData.content
                                    }
                                })
                                closeInput()
                            }}>

                        </button>
                    </div>
                </div>
            </div>
            <div className="overlay-notes" onClick={closeInput}></div>
        </>
    )
}

export { NoteInput }