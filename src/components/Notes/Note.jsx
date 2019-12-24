import React from "react";
import {Link} from "react-router-dom";


const Note = props => (
    <ul>
        {props.notes.map( (note, key) => (
            <li key={key}>
                <Link to={`/notes/${note.id}`}> {note.title}</Link>
            </li>
        ))}
    </ul>

);

export default Note
