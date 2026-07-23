import React from 'react'
import {Notes} from './Notes'
import { Plus } from 'lucide-react'

const Home = ({notes, openEditing, deleteNote, openModal, openViewNote}) => {
  return (
    <div className='w-full relative'>
      <div className='m-5'>
        <p className='hidden sm:block text-xl font-semibold'>All Notes</p>
      </div>
      <div className='w-full '>
        <Notes 
          notes = {notes}
          deleteNote = {deleteNote}
          openEditing = {openEditing}
          openViewNote = {openViewNote}
        />
      </div>
      <div className='fixed bottom-5 right-5'>
        <button
            className=" backdrop-blur-2xl cursor-pointer bg-violet-500 p-2 text-white rounded-full mr-4"
            onClick={openModal}
          >
            <Plus size={30} color="#f3f2f2" strokeWidth={2.5} />
          </button>
      </div>
    </div>
  )
}

export default Home