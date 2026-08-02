import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import CreateNote from "./components/CreateNote.jsx";
import ViewNote from "./components/ViewNote.jsx";
import { useSelector } from "react-redux";
import SearchNote from "./components/SearchNote.jsx";

function App() {

  const isOpen = useSelector((state) => state.ui.isOpen);
  const isViewing = useSelector((state) => state.ui.isViewing);  
  const searchQuery = useSelector((state) => state.ui.searchQuery);

  return (
    <>
      <div className="h-screen flex flex-col ">
        <div className="min-h-1/10 w-full">
          <Header />
        </div>
        <div className="flex flex-1 flex-col sm:flex-row">
          <div className="flex sm:flex-col md:w-1/5 lg:w-56 sm:border-r-2 border-gray-300 sm:h-full py-3">
            <Sidebar />
          </div>
          <div className="flex flex-1 flex-col m-2">
            {
              searchQuery === ""
              ? <Home />
              : <SearchNote searchQuery = {searchQuery} />
            }
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
