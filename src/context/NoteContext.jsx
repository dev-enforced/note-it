import { createContext, useContext, useReducer } from "react";
const NotesContext = createContext();
const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
    const notesReducer = (stateGiven, actionTaken) => {
        const { type, payload } = actionTaken;
        switch (type) {
            case "ADD_NOTES":
                return {
                    ...stateGiven,
                    notes: [...stateGiven.notes, {
                        title: payload.title,
                        content: payload.content,
                        createdAt: new Date().toLocaleString()
                    }]
                }
            default:
                return { ...stateGiven }
        }
    }
    const [notesState, notesDispatch] = useReducer(notesReducer, { notes: [] })
    return (
        <NotesContext.Provider value={{notesState,notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

export { NotesProvider, useNotes }