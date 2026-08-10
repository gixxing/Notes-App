import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreateNote from "./components/CreateNote.jsx";
import ViewNote from "./components/ViewNote.jsx";
import { useDispatch, useSelector } from "react-redux";
import SearchNote from "./components/SearchNote.jsx";
import { closeSidebar } from "./features/ui/uiSlice.js";
import { Outlet } from "react-router";

function App() {

  const isOpen = useSelector((state) => state.ui.isOpen);
  const isViewing = useSelector((state) => state.ui.isViewing);  
  const searchQuery = useSelector((state) => state.ui.searchQuery);
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleChange = (e) => {
      if(e.matches){
        dispatch(closeSidebar());
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    if(mediaQuery.matches){
      dispatch(closeSidebar());
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [dispatch]);

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(theme);
  },[theme])

  return (
    <>
      <div className="h-screen flex flex-col ">
        <div className="w-full z-30">
          <Header />
        </div>
        <div className="flex flex-1 dark:bg-slate-950">
          <div className={`hidden sm:flex flex-col md:w-1/5 lg:w-56 sm:border-r-2 sm:dark:border-r border-gray-300 py-3`}>
            <Sidebar />
          </div>
          <div className="flex flex-1 min-w-0 flex-col m-2">
            {
              searchQuery === ""
              ? <Outlet />
              : <SearchNote searchQuery = {searchQuery} />
            }
          </div>
        </div>

          {
            isSidebarOpen &&
            <div 
              className="fixed inset-0 backdrop-blur-sm z-50 bg-black/30 "
              onClick={() => dispatch(closeSidebar())}
            >
              <div 
                className={`w-64 h-full dark:bg-slate-950 bg-white transition-transform duration-500 ${isSidebarOpen?"translate-x-0":"-translate-x-full"}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Sidebar />
              </div>
            </div>
          }

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
