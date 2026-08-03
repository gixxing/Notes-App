import React from 'react'
import NoteCard from './NoteCard'
import { useSelector } from 'react-redux'

export const Notes = ({notes, deletedCard=false}) => {

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4'>
        {
            notes.map((note) =>(
                <div key={note.id} className='h-full'>
                    <NoteCard 
                        note = {note}
                        deletedCard = {deletedCard}
                    />
                </div>
            ))
        }
    </div>
  )
}
