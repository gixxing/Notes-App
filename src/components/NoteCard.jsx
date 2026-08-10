import { ArchiveRestore, EllipsisVertical, Pencil, Pin, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openEditing, openView } from "../features/ui/uiSlice";
import { deleteNote, deletePermanently, restoreNote, setPinned } from "../features/notes/notesSlice";
import { NOTE_COLORS } from "../constants/noteColors";

const NoteCard = ({ note, deletedCard}) => {

  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`w-full ${NOTE_COLORS[note.color]} rounded-xl h-full flex sm:flex-col justify-between relative`}
        onClick={() => !deletedCard && dispatch(openView(note.id))}
      >
        <div className="flex flex-1 flex-col px-4 sm:px-0 overflow-hidden sm:mx-5 my-3 gap-4">
          <div className="py-3 flex justify-between gap-2 items-center sm:items-start">
            <div className="font-bold flex-1 min-w-0">
              <p className="truncate text-gray-700">
                {note.title}
              </p>
            </div>
            {note.pinned && (
              <button
                className={`cursor-pointer pt-1 ${note.pinned ? "text-violet-500" : "text-black"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMenu(false);
                  dispatch(setPinned(note.id));
                }}
              >
                <Pin size={20} strokeWidth={1.75} />
              </button>
            )}
          </div>

          <div className="hidden sm:block">
            <p className="wrap-break-word text-gray-700">
              {
                note.content.length > 100
                ? note.content.slice(0, 100) + " ..."
                : note.content
              }
            </p>
          </div>
        </div>

        <div className="p-3 flex justify-between items-center">
          {new Date(note.createdAt).toLocaleDateString()}
          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu((prev) => !prev);
            }}
          >
            <EllipsisVertical size={22} />
          </button>
        </div>

        {showMenu && (
          <div className="absolute bottom-1 right-8 sm:right-9 bg-white flex flex-col gap-3 rounded-lg shadow-2xl px-3 py-1 z-50 dark:bg-slate-900">
            {deletedCard ? (
              <>
                <button
                  className="cursor-pointer text-violet-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(false);
                    dispatch(restoreNote(note.id));
                  }}
                >
                  <ArchiveRestore size={20} strokeWidth={1.75} />
                </button>
                <button
                  className="cursor-pointer text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(false);
                    dispatch(deletePermanently(note.id));
                  }}
                >
                  <Trash2 size={20} strokeWidth={1.75} />
                </button>
              </>
            ) : (
              <>
                <button
                  className="cursor-pointer text-blue-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(false);
                    dispatch(openEditing(note.id));
                  }}
                >
                  <Pencil size={20} strokeWidth={1.75} />
                </button>
                <button
                  className="cursor-pointer text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(false);
                    dispatch(deleteNote(note.id));
                  }}
                >
                  <Trash2 size={20} strokeWidth={1.75} />
                </button>
                <button
                  className={`cursor-pointer ${note.pinned ? "text-violet-500" : "text-black dark:text-gray-300"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(false);
                    dispatch(setPinned(note.id));
                  }}
                >
                  <Pin size={20} strokeWidth={1.75} />
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NoteCard;
