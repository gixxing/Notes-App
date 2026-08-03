import React from 'react'
import {Notes} from '../components/Notes'
import { PinOff } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

const Pinned = () => {

  const notes = useSelector((state) => state.notes.notes);

  const pinnedNotes = notes.filter( (note) => 
    note.pinned 
    && !note.isDeleted);

  const dispatch = useDispatch();

  return (
    <div className='w-full flex flex-1 flex-col relative'>
      { pinnedNotes.length > 0 &&
        <div className='m-5'>
        <p className='block text-xl font-semibold'>
          Pinned Notes
        </p>
      </div>}
      <div className='w-full flex flex-col flex-1'>
        {
          pinnedNotes.length > 0
          ? 
            <Notes notes={pinnedNotes} />
          : <div className='flex flex-1 flex-col justify-center items-center gap-3'>
              <PinOff size={110} color="#8B5CF6" strokeWidth={2} />
              <p className='font-bold text-2xl'>No Pinned Notes</p>
            </div>
          
        }
      </div>
    </div>
  )
}

export default Pinned