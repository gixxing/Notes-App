import React from 'react'
import {Notes} from '../components/Notes'
import { Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'

const Trash = () => {

  const notes = useSelector((state) => state.notes.notes);

  const deletedNotes = notes.filter( (note) => note.isDeleted);

  const dispatch = useDispatch();

  return (
    <div className='w-full flex flex-1 flex-col relative '>
      { deletedNotes.length > 0 &&
        <div className='m-5'>
          <p className='block text-xl font-semibold dark:text-gray-300'>
            Deleted Notes
          </p>
        </div>}
      <div className='w-full flex flex-col flex-1'>
        {
          deletedNotes.length > 0
          ? 
            <Notes notes={deletedNotes} deletedCard />
          : <div className='flex flex-1 flex-col justify-center items-center gap-3'>
              <Trash2 size={110} color="#8B5CF6" strokeWidth={2} />
              <p className='font-bold text-2xl dark:text-gray-300'>Trash is Empty</p>
            </div>
          
        }
      </div>
    </div>
  )
}

export default Trash