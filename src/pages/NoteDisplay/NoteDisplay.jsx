import React from 'react'
import { Navigation, NoteItem } from "components"
import "./NoteDisplay.css";
const NoteDisplay = () => {
    return (
        <>
            <Navigation />
            <section className="main-wrapper m-4">
                <div className="notes-container flex-column gentle-flex-gap">
                    <NoteItem />
                    <NoteItem />
                </div>
            </section>
        </>
    )
}

export { NoteDisplay }