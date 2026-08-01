
export const loadNotes = () => {
    try {
        return JSON.parse(localStorage.getItem("notes")) ?? [];
    } catch {
        return [];
    }
}

export const saveNotes = notes => {
    localStorage.setItem("notes", JSON.stringify(notes));
}