import { CircleX, NotebookText, Plus, Search } from 'lucide-react'
import React, { useState } from 'react'

function Header({openModal}) {

  const [isSearching, setIsSearching] = useState(false) ;

  return (
    <div className="flex items-center px-2 sm:px-5 py-4 border-b-2 border-gray-300">
      <div className={`${isSearching? "hidden" : "flex"} sm:flex p-2 gap-2`}>
        <NotebookText size={30} color="#9139ea" strokeWidth={2.25} />
        <p className="text-xl font-semibold">Notes App</p>
      </div>

      <div className="flex-1 flex justify-end sm:justify-center">
        {/* for Desktop/tab */}
        <div className="hidden sm:flex  border border-slate-600 rounded-2xl items-center mx-4 sm:w-80 lg:w-xl px-2 ">
          <input
            type="text"
            placeholder="Search"
            className={`focus:outline-none flex-1 ml-2 py-2`}
          />
          <Search size={20} color="#000000" strokeWidth={1.75} />
        </div>

        {/* for Mobile */}
        <div className='sm:hidden relative flex items-center justify-end w-full'>
          <input type="text" 
                placeholder="Search ..."
                className={`${isSearching? "flex flex-1" : "hidden"} focus:outline-none border rounded-2xl z-50 backdrop-blur-md shadow-sm py-2 px-3 ml-2`}
          />
          <button className="px-4 cursor-pointer"
                  onClick={() => setIsSearching((prev) => !prev)}
          >
            {
              isSearching ?
                <CircleX size={25} color="#000000" strokeWidth={2.25}/> :
                <Search size={25} color="#000000" strokeWidth={2.25} /> 
            }
            
          </button>
        </div>
          

      </div>
        <div>
          <button
            className="cursor-pointer bg-violet-500 p-2 text-white rounded-full mr-4"
            onClick={openModal}
          >
            <Plus size={30} color="#f3f2f2" strokeWidth={2.5} />
          </button>
        </div>
    </div>
  );
}

export default Header