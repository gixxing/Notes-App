import { Pin, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCreate, closeEditing } from "../features/ui/uiSlice";
import { addNote, updateNote } from "../features/notes/notesSlice";
import { NOTE_COLORS } from "../constants/noteColors";

const CreateNote = () => {
  
  const isEditing = useSelector((state) => state.ui.isEditing);
  const selectedNoteId = useSelector((state) => state.ui.selectedNoteId);
  const note = useSelector((state) =>
    state.notes.notes.find((n) => n.id === selectedNoteId),
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("violet");
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    setTitle(note ? note.title : "");
    setContent(note ? note.content : "");
    setColor(note?.color ?? "violet");
    setPinned(note?.pinned ?? false);
  }, [note]);

  const handleCancel = () => {
    if (isEditing) dispatch(closeEditing());
    else dispatch(closeCreate());
  };

  const newNote = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const updatedNote = {
      id: note?.id ?? crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      color,
      pinned,
      createdAt: note?.createdAt ?? new Date().toISOString(),
    };

    if (isEditing) dispatch(updateNote(updatedNote));
    else dispatch(addNote(updatedNote));

    setTitle("");
    setContent("");

    handleCancel();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-end justify-center z-50">
      <div className="bg-white rounded-xl py-9 w-11/12 max-w-lg mb-4 pl-9">
        <form onSubmit={newNote}>
          <div className="flex items-center justify-between w-11/12 px-1">
            <p className="font-bold text-xl">
              {isEditing? "Edit Note": "New Note" }
            </p>
            <button 
              onClick={handleCancel} 
              type="button"
              className="cursor-pointer"
            >
              <X size={25} strokeWidth={2.25} />
            </button>
          </div>

          <div className="w-11/12 mt-4">
            <input
              type="text"
              placeholder="title"
              value={title}
              className="w-full border-2 rounded-md border-gray-300 py-1 px-2 my-1 focus:outline-none focus:ring-1 focus:border-violet-500"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-11/12">
            <textarea
              rows="8"
              placeholder="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border-2 rounded-md border-gray-300 py-1 px-2 my-1 focus:outline-none focus:ring-1 focus:border-violet-500"
            ></textarea>
          </div>

          <div className="flex items-center justify-between w-11/12 px-1 my-2">
            <div className="flex gap-2 mt-1 mb-4">
              {Object.entries(NOTE_COLORS).map(([currColor, bgClass]) => (
                <button
                  key={currColor}
                  type="button"
                  className={`${bgClass} w-7 h-7 rounded-full cursor-pointer ${
                    color === currColor ? "ring-2 ring-black ring-offset-2" : ""
                  }`}
                  onClick={() => setColor(currColor)}
                />
              ))}
            </div>

            <button
              type="button"
              className={`cursor-pointer ${
                pinned ? "text-violet-500" : "text-black"
              }`}
              onClick={() => setPinned((prev) => !prev)}
            >
              <Pin size={25} strokeWidth={2} />
            </button>
          </div>

          <div className="flex justify-around">
            <button
              type="button"
              className="cursor-pointer py-2 px-5 bg-gray-50 border-2 border-gray-300 font-semibold rounded-xl"
              onClick={handleCancel}
            >
              cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer bg-violet-500 py-2 px-7 text-white font-semibold rounded-xl"
            >
              {isEditing? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
