import {Notes} from '../components/Notes'
import { NotebookPen, Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar, openCreate } from '../features/ui/uiSlice'

const Home = () => {

  const notes = useSelector((state) => state.notes.notes)
                  .filter((note) => !note.isDeleted);

  const sortedNotes = [...notes].sort((a, b) => b.pinned - a.pinned);

  const dispatch = useDispatch();

  dispatch(closeSidebar());

  return (
    <div className='w-full flex flex-1 flex-col relative '>
      { sortedNotes.length > 0 &&
        <div className='m-5'>
          <p className='block text-xl font-semibold dark:text-gray-300'>
            All Notes
          </p>
        </div>}
      <div className='w-full flex flex-col flex-1'>
        {
          sortedNotes.length > 0
          ? 
            <Notes notes={sortedNotes} />
          : <div className='flex flex-1 flex-col justify-center items-center gap-3 dark:text-gray-300'>
              <NotebookPen size={110} color="#8B5CF6" strokeWidth={2} />
              <p className='font-bold text-2xl'>No Notes Yet</p>
              <p className='text-xl text-gray-500'>Click the "+" button to create your first note.</p>
            </div>
          
        }
      </div>
      <div className='fixed bottom-5 right-5'>
        <button
            className=" backdrop-blur-2xl cursor-pointer bg-violet-500 p-2 text-white rounded-full mr-4"
            onClick={() => dispatch(openCreate())}
          >
            <Plus size={30} color="#f3f2f2" strokeWidth={2.5} />
          </button>
      </div>
    </div>
  )
}

export default Home