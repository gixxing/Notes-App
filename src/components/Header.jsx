import { CircleX, Menu, Moon, NotebookText, Plus, Search, SunDim } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openCreate, openSearch, setTheme, toggleSidebar } from '../features/ui/uiSlice';

function Header() {

  const [isSearching, setIsSearching] = useState(false) ;
  const [searchInput, setSearchInput] = useState("");
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  const handleTheme = (e) => {
    dispatch(setTheme(
      e.target.checked ? "dark" : "light"
    ));
  }

  useEffect(() => {
    dispatch(openSearch(searchInput));
  }, [searchInput]);

  return (
    <div className="flex items-center px-2 sm:px-5 py-4 border-b-2 dark:border-b border-gray-300 bg-white dark:bg-slate-950">
      <div className={`${isSearching? "hidden" : "flex"} sm:flex p-2 gap-2`}>
        {<button 
          className='sm:hidden cursor-pointer dark:text-gray-300'
          onClick={() => dispatch(toggleSidebar())}
        >
          <Menu size={30} strokeWidth={1.5} />
        </button>}
        <div className='hidden sm:flex'>
          <NotebookText size={30} color="#9139ea" strokeWidth={2.25} />
        </div>
        <p className="text-xl font-semibold dark:text-gray-300">Notes App</p>
      </div>

      <div className="flex-1 flex justify-end sm:justify-center ">
        {/* for Desktop/tab */}
        <div className="hidden sm:flex gap-2 px-2 border border-slate-600 dark:text-gray-300 rounded-2xl items-center mx-4 w-80 lg:w-xl">
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={`focus:outline-none flex-1 ml-2 py-2 `}
          />
          <Search size={20} strokeWidth={1.75} />
        </div>

        {/* for Mobile */}
        <div className='sm:hidden relative flex items-center justify-end w-full gap-2 dark:text-gray-300'>
          <input type="text" 
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className={`${isSearching? "flex flex-1" : "hidden"} focus:outline-none dark:text-gray-300 border border-slate-600 rounded-2xl z-50 backdrop-blur-md shadow-sm py-2 px-3 ml-2`}
          />
          <button className="cursor-pointer"
                  onClick={() => {
                    setIsSearching((prev) => !prev);
                    setSearchInput("");
                  }}
          >
            {
              isSearching ?
                <CircleX size={25} strokeWidth={2.25}/> :
                <Search size={25} strokeWidth={2.25} /> 
            }
            
          </button>
        </div>

      </div>

        <label className="inline-flex items-center cursor-pointer mx-3">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={handleTheme}
                checked={theme=== "dark"}
            />
            <div className="text-slate-800 dark:text-blue-500">
              <SunDim />
            </div>
            
        </label>

        <div>
          <button
            className="cursor-pointer bg-violet-500 p-2 text-white rounded-full mr-4"
            onClick={() => dispatch(openCreate())}
          >
            <Plus size={30} color="#f3f2f2" strokeWidth={2.5} />
          </button>
        </div>
    </div>
  );
}

export default Header