import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const {notes, addNote} = useContext(noteContext)

  return (
    <div className=''>
      <h1> My notes</h1>
      <div className='grid grid-cols-4 gap-3 justify-items-center px-5 mx-auto'>
        
      {
        notes.map((note)=> {
          return <NoteItem note={note} />
        } )
      }
    </div>
      </div>
  )
}

export default Notes
