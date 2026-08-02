import React from "react";
import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";

const SearchNote = ({ searchQuery }) => {
  const notes = useSelector((state) => state.notes.notes);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between m-5 font-semibold text-xl">
          <div className="flex truncate">
            <p>Search results for '</p>
            <p className="text-violet-500 truncate">{searchQuery}'</p>
          </div>
          <div className="text-gray-500 truncate">{filteredNotes.length} notes found</div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
          {
            filteredNotes.length > 0 ? (
                filteredNotes.map((note) => (
                <div key={note.id} className="h-full">
                    <NoteCard note={note} />
                </div>
                ))
            ) : (
                <div className="col-span-full text-center py-10">
                    <p className="text-xl font-semibold">No Notes Found</p>
                    <p className="text-gray-500 mt-2">
                        Try searching with a different keyword.
                    </p>
                </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default SearchNote;
