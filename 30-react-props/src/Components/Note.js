import React from 'react'


function Note(props) {
    console.log("Note Props: ", props)
    return <li>{props.content}</li>
}

export default Note