import {Notes} from '../components/Notes'
import { Trash2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTrash } from '../features/notes/notesSlice'

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
      { deletedNotes.length > 0 &&
        <div className='fixed bottom-5 right-5'>
          <button 
            onClick={() => dispatch(clearTrash())}
            className='flex items-center gap-1 text-red-500 bg-white border-2 dark:bg-slate-800 dark:border-none py-2 px-4 rounded-xl cursor-pointer'
          >
            <Trash2 size={20} strokeWidth={1.25} />
            Clear Trash
          </button>
        </div>
      }
    </div>
  )
}

export default Trash