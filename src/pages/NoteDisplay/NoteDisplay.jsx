import React from 'react'
import { Navigation, NoteItem } from "components"
import { useAuthentication } from 'context';
import "./NoteDisplay.css";
const NoteDisplay = () => {
    const { authState:{notes:notesState} } = useAuthentication();
    return (
        <>
            <Navigation />
            <section className="main-wrapper m-4">
                <div className="notes-container flex-column gentle-flex-gap">
                    {
                        notesState.length === 0
                            ? "NO NOTES FOUND.START ADDING" :
                            notesState.map((everyNote) => <NoteItem noteContent={everyNote} />)
                    }
                </div>
            </section>
        </>
    )
}

export { NoteDisplay }