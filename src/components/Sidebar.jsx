import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar, toggleSidebar } from '../features/ui/uiSlice';
import { Menu} from 'lucide-react';
import { NavLink } from 'react-router';

function Sidebar() {

  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();

  return (
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
      <div className="flex items-center p-2 sm:my-2 px-8 ">
        <NavLink 
          to={'/'}
          onClick={() => dispatch(closeSidebar())}
          className={({isActive}) => 
            `text-xl ${isActive? "text-violet-500" : "text-gray-500"} font-semibold w-full`
          }
        >
          All Notes
        </NavLink>
      </div>
      <div className="flex items-center p-2 sm:my-2 px-8 ">
        <NavLink 
          to={'pinned'}
          onClick={() => dispatch(closeSidebar())}
          className={({isActive}) => 
            `text-xl ${isActive? "text-violet-500" : "text-gray-500"} w-full font-semibold`
          }
        >
          Pinned
        </NavLink>
      </div>
      <div className="flex items-center p-2 sm:my-2 px-8 ">
        <NavLink 
          to={'trash'}
          onClick={() => dispatch(closeSidebar())}
          className={({isActive}) => 
            `text-xl ${isActive? "text-violet-500" : "text-gray-500"} w-full font-semibold`
          }
        >
          Trash
        </NavLink>
      </div>
      
    </div>
  );
}

export default Sidebar