import { Delete, Label, Notes, Archived } from 'constants';
const sideNavigationLinks = [
    {
        linkName: "Notes",
        iconRequired: <Notes />,
        path: "/noteshome"
    },
    {
        linkName: "Labels",
        iconRequired: <Label />,
        path: "/noteslabels"
    },
    {
        linkName: "Archive",
        iconRequired: <Archived />,
        path: "/notesarchive"
    },
    {
        linkName: "Trash",
        iconRequired: <Delete />,
        path: "/notestrash"
    }
]

export { sideNavigationLinks }