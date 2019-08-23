import React from 'react';

import { connect } from 'react-redux';

import './NotesList.css';
import Note from '../Note/Note';

const NotesList = (props) => {
    const notes = props.notes.map((n, i) => {
        return <Note key={i} id={n.id} title={n.title} text={n.text} />
    });

    const contentToRender = (notes.length === 0) ? <p className="advice">There are no notes yet.</p>
                                                 : notes;

    return (  
        <div className="notes-list">
            {contentToRender}
        </div>
    );
}

const mapStateToProps = state => ({
    notes: state.notes,
});
 
export default connect(mapStateToProps)(NotesList);