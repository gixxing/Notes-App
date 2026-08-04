
export const loadNotes = () => {
    try {
        return JSON.parse(localStorage.getItem("notes")) ?? [];
    } catch {
        return [];
    }
}

export const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
}

export const loadTheme = () => {
    try {
        return localStorage.getItem("theme") ?? "dark" ;
    }catch{
        return "dark";
    }
}

export const saveTheme = (theme) => {
    localStorage.setItem("theme", theme);
}
