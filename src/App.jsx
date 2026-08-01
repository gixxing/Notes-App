import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import CreateNote from "./components/CreateNote.jsx";
import ViewNote from "./components/ViewNote.jsx";
import { useSelector } from "react-redux";

function App() {

  const isOpen = useSelector((state) => state.ui.isOpen);
  const isViewing = useSelector((state) => state.ui.isViewing);  

  return (
    <>
      <div className="h-screen">
        <div className="min-h-1/10 w-full">
          <Header />
        </div>
        <div className="flex flex-col sm:flex-row sm:h-full">
          <div className="flex sm:flex-col md:w-1/5 lg:w-56 sm:border-r-2 border-gray-300 h-full py-3">
            <Sidebar />
          </div>
          <div className="flex flex-1 m-2">
            <Home />
          </div>
        </div>

          {
            isOpen &&
            <CreateNote />
          }

          {
            isViewing &&
            <ViewNote />
          }

      </div>
    </>
  );
}

export default App;

// const [isOpen, setIsOpen] = useState(false);
//   const [selectedNote, setSelectedNote] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   const [isViewing, setIsViewing] = useState(false);

//   const openEditing = (note) => {
//     setSelectedNote(note);
//     setIsEditing(true);
//     setIsOpen(true);
//   };

//   const closeCreateNote = () => {
//     setIsOpen(false);
//     setSelectedNote(null);
//     setIsEditing(false);
//   };

//   const openViewNote = (note) => {
//     setSelectedNote(note);
//     setIsViewing(true);
//   }

//   const closeViewNote = () => {
//     setSelectedNote(null);
//     setIsViewing(false);
//   }

//   const [notes, setNotes] = useState(() => {
//     const savedNotes = localStorage.getItem("notes") ;
//     return savedNotes ? JSON.parse(savedNotes) : [] ;
//   });

//   const addNote = (note) => {
//     setNotes((prev) => [...prev , note]);
//   }

//   const editNote = (note) => {
//     setNotes((prev) => prev.map((curr) => (
//       curr.id === note.id ? note : curr
//     )));
//     setSelectedNote(null);
//     setIsEditing(false);
//   }

//   const deleteNote = (id) => {
//     setNotes((prev) => 
//       prev.filter(note => note.id !== id
//     ));
//   }

//   useEffect(() => {
//     localStorage.setItem("notes",JSON.stringify(notes));
//   }, [notes]);
