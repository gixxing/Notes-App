import { CalendarDays, Pencil, Pin, Trash2, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeView, openEditing } from "../features/ui/uiSlice";
import { deleteNote, setPinned } from "../features/notes/notesSlice";
import { NOTE_COLORS } from "../constants/noteColors";

const ViewNote = () => {

  const selectedNoteId = useSelector((state) => state.ui.selectedNoteId);
  const note = useSelector((state) => 
    state.notes.notes.find(n => n.id === selectedNoteId)
  );
  if(!note) return null;

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(closeView());
    dispatch(openEditing(note.id));
  };

  const handleDelete = () => {
      dispatch(closeView());
      dispatch(deleteNote(note.id));
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-end justify-center z-50 sm:items-center"
        onClick={() => dispatch(closeView())}
      >
        <div 
          className={`${NOTE_COLORS[note.color]} p-8 rounded-xl w-full mx-1 sm:mx-0 sm:w-xl lg:w-2xl `}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between mb-9 mx-1">
            <p className="text-2xl font-semibold">Note</p>
            <button 
                className="cursor-pointer" 
                onClick={() => dispatch(closeView())}>
              <X size={25} strokeWidth={2.25} />
            </button>
          </div>

          <div className="border-b-2 pb-7">
            <div className="flex justify-between items-center my-5">
              <div className="flex-1 min-w-0 mr-2">
                <p className="text-3xl font-bold wrap-break-word">{note.title}</p>
              </div>

              <button 
                className={`cursor-pointer ${note.pinned ? "text-violet-500" : "text-black"}`}
                onClick={() => dispatch(setPinned(note.id))}
              >
                <Pin size={30} strokeWidth={2}/>
              </button>
              
            </div>
            <div className="flex gap-3 items-center ">
              <CalendarDays size={18} strokeWidth={1.75} />
              <p className="">
                {new Date(note.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="my-9">
            <p className="text-xl wrap-break-word">{note.content}</p>
          </div>

          <div className="flex justify-between my-7">
            <button
              className="flex text-2xl gap-4 font-semibold items-center text-violet-500 border-2 py-3 px-6 rounded-xl cursor-pointer"
              onClick={handleEdit}
            >
              <Pencil size={28} strokeWidth={2.25} />
              <p>Edit</p>
            </button>
            <button
              className="flex text-xl sm:text-2xl gap-4 font-semibold items-center text-red-500 border-2 py-3 px-6 rounded-xl cursor-pointer"
              onClick={handleDelete}
            >
              <Trash2 size={30} strokeWidth={1.75} />
              <p>Delete</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewNote;
