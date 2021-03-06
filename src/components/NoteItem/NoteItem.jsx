import React from 'react';
import parse from "html-react-parser";
import "./NoteItem.css";
import { Archived, Label, Delete, PinOutline, ColorPalette, Pen } from 'constants';
const NoteItem = ({ noteContent }) => {
    return (
        <div className="note-container pos-relative py-4 px-8 my-4">
            <div className="note-heading mb-3 fs-1-5 fw-600">{noteContent.title}</div>
            <div className="note-description">
                {parse(noteContent.content)}
            </div>
            <button className="pin-action pos-absolute icon-btn-action">
                <PinOutline className="note-action-icon" />
            </button>
            <div className="note-actions-container gentle-flex flex-space-between">
                <div></div>
                <div className="note-actions gentle-flex-gap">
                    <button className="icon-btn-action">
                        <Label className="note-action-icon" />
                    </button>
                    <button className="icon-btn-action">
                        <ColorPalette className="note-action-icon" />
                    </button>
                    <button className="icon-btn-action">
                        <Pen className="note-action-icon" />
                    </button>
                    <button className="icon-btn-action">
                        <Archived className="note-action-icon" />
                    </button>
                    <button className="icon-btn-action">
                        <Delete className="note-action-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export { NoteItem }