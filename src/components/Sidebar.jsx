import React, { useState } from 'react'

function Sidebar() {

  return (
    <div className="flex justify-between sm:flex-col w-full border-b mx-5 sm:border-none sm:my-5">
      <div className="flex items-center p-2 sm:my-2 px-5 border-b border-violet-500 sm:border-none">
        <p className='text-xl text-violet-500 font-semibold'>All Notes</p>
      </div>
      <div className="flex items-center p-2 sm:my-2 px-5 sm:border-none">
        <p className='text-xl font-semibold'>Pinned</p>
      </div>
      <div className="flex items-center p-2 sm:my-2 px-5 sm:border-none">
        <p className='text-xl font-semibold'>Trash</p>
      </div>
    </div>
  );
}

export default Sidebar