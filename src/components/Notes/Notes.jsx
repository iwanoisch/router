import React, { Component } from 'react';

import './Notes.css';
import Note from "./Note";


class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNote: false,
            notes: []
        };

    }

    componentDidMount() {
        this.setState({
            notes: [
                {
                    id: 1,
                    title: 'My note 1'
                },
                {
                    id: 2,
                    title: 'My note 2'
                },
                {
                    id: 3,
                    title: 'My note 3'
                },
            ]
        });
    }


    params () {

    }


    render() {
        //const { match: { params: { noteId } } } = this.props;
        //const { notes } = this.state;
        let notes = this.state.notes;
        const noteId = this.props.match.params.noteId;
        let selectedNote = false;

        if (noteId > 0) {
            selectedNote = notes.filter(note => note.id === Number(noteId));
            console.log(selectedNote)
        }
        notes = selectedNote ? selectedNote : notes;

        return (
            <div className="Notes">
                <h1>Notes</h1>
                <Note notes={notes}  />
               {/* {selectedNote ?  <Note notes={selectedNote}  /> :  <Note notes={notes}  />}*/}
            </div>
        );
    }


}

export default Notes;
