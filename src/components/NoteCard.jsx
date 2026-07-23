import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";

const NoteCard = ({ note, openEditing, deleteNote, openViewNote }) => {
  const [showMenu, setShowMenu] = useState(false);

  const colors = {
    green: "bg-green-300",
    violet: "bg-fuchsia-300",
    yellow: "bg-amber-200",
    cyan: "bg-cyan-200",
    pink: "bg-pink-200",
    gray: "bg-gray-300",
    indigo: "bg-indigo-200",
  };

  return (
    <>
      <div
        className={`w-full ${colors[note.color]} rounded-xl h-full flex sm:flex-col justify-between relative`}
      >
        <div className="flex flex-1 flex-col overflow-hidden mx-5 my-3 gap-4"
           onClick={() => openViewNote(note)}
        >
          <div
            className="font-bold py-3.5 "
          >
            <p className="truncate sm:overflow-visible sm:whitespace-normal sm:wrap-break-word text-gray-700">
              {note.title}
            </p>
          </div>

          <div
            className="hidden sm:block"
          >
            <p className="wrap-break-word text-gray-700">{note.content}</p>
          </div>
        </div>

        <div className="p-3 flex justify-between items-center">
          {new Date(note.createdAt).toLocaleDateString()}
          <button
            className="cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <EllipsisVertical size={22} />
          </button>
        </div>

        {showMenu && (
          <div className="absolute bottom-3  right-8 sm:right-9 bg-white flex gap-3 rounded-lg shadow-2xl px-3 py-1 z-50">
            <button
              className="cursor-pointer text-violet-500"
              onClick={() => {
                openEditing(note);
                setShowMenu(false);
              }}
            >
              <Pencil size={20} strokeWidth={1.75} />
            </button>
            <button
              className="cursor-pointer text-red-500"
              onClick={() => deleteNote(note.id)}
            >
              <Trash2 size={20} strokeWidth={1.75} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NoteCard;
