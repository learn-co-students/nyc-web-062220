import React from 'react'
import Note from './Note'
class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Fourth Note", "Third Note"]
    }

    notesArray = () => {
        return this.apiResponse().map((noteObj, idx) => <Note content={noteObj} />)
    }

    render() {

        return (
            <ul>{this.notesArray()}</ul >
        )
    }

}

export default NotesContainer