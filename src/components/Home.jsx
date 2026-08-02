import React from 'react'
import {Notes} from './Notes'
import { NotebookPen, Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { openCreate } from '../features/ui/uiSlice'

const Home = () => {

  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  return (
    <div className='w-full flex flex-1 flex-col relative'>
      { notes.length > 0 &&
        <div className='m-5'>
        <p className='hidden sm:block text-xl font-semibold'>
          All Notes
        </p>
      </div>}
      <div className='w-full flex flex-col flex-1'>
        {
          notes.length > 0
          ? 
            <Notes />
          : <div className='flex flex-1 flex-col justify-center items-center gap-3'>
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