import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const {notes, setNotes} = useContext(noteContext)

  return (
    <div>
      <h1> My notes</h1>
      {
        notes.map((note)=> {
            return <NoteItem note={note} />
        } )
      }
    </div>
  )
}

export default Notes
