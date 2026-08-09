import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar, toggleSidebar } from '../features/ui/uiSlice';
import { Menu, Trash2} from 'lucide-react';
import { NavLink } from 'react-router';
import { deleteAllNotes } from '../features/notes/notesSlice';

function Sidebar() {

  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.notes);
  const notesCount = notes.filter((note) => !note.isDeleted).length;
  const pinnedCount = notes.filter((note) => note.pinned && !note.isDeleted).length;
  const trashCount = notes.filter((note) => note.isDeleted).length;

  return (
    <div className='flex flex-col justify-between items-center h-full'>
      <div className="flex justify-between flex-col w-full gap-4 ">
        {isSidebarOpen && (
          <div className='flex gap-2 border-b-2 dark:border-b dark:text-gray-300 border-gray-300 py-5 pl-3'>
            <button
              className="cursor-pointer"
              onClick={() => dispatch(toggleSidebar())}
            >
              <Menu size={30} strokeWidth={1.5} />
            </button>
            <p className="text-xl font-semibold">Notes App</p>
          </div>
        )}
        <div className="flex items-center justify-between gap-2 p-2 sm:my-2 px-8 ">
          <NavLink 
            to={'/'}
            onClick={() => dispatch(closeSidebar())}
            className={({isActive}) => 
              `text-xl ${isActive? "text-violet-500" : "text-gray-500"} font-semibold w-full`
            }
          >
            All Notes
          </NavLink>
          <p className='dark:text-gray-400'>
            {notesCount}
          </p>
        </div>
        <div className="flex items-center justify-between p-2 sm:my-2 px-8">
          <NavLink 
            to={'pinned'}
            onClick={() => dispatch(closeSidebar())}
            className={({isActive}) => 
              `text-xl ${isActive? "text-violet-500" : "text-gray-500"} w-full font-semibold`
            }
          >
            Pinned
          </NavLink>
          <p className='dark:text-gray-400'>
            {pinnedCount}
          </p>
        </div>
        <div className="flex items-center justify-between p-2 sm:my-2 px-8 ">
          <NavLink 
            to={'trash'}
            onClick={() => dispatch(closeSidebar())}
            className={({isActive}) => 
              `text-xl ${isActive? "text-violet-500" : "text-gray-500"} w-full font-semibold`
            }
          >
            Trash
          </NavLink>
          <p className='dark:text-gray-400'>
            {trashCount}
          </p>
        </div>
      </div>

      <div 
        className='flex gap-2 justify-center items-center mb-6 text-red-500 border-2 dark:bg-slate-900 dark:border-none p-3 rounded-2xl cursor-pointer'
        onClick={() => dispatch(deleteAllNotes())}
      >
        <Trash2 size={20} strokeWidth={1.5} />
        <p>
          Clear All Notes
        </p>
      </div>
    </div>
  );
}

export default Sidebar