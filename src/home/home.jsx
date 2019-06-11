import React, { Component } from "react";
import NoteComp from "../note/note";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Notes: ["Note 1", "Note 2", "Note 3"],
      message: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    let previousNotes = this.state.Notes;
    previousNotes.push(this.state.message);
    this.setState({
      Notes: previousNotes,
      message: ""
    });
  }

  handleUserInput(event) {
    this.setState({
      message: event.target.value
    });
  }

  removeNote = value => {
    let previousNotes = this.state.Notes;
    for (let i = 0; i < previousNotes.length; i++) {
      if (previousNotes[i] === value) {
        previousNotes.splice(i, 1);
      }
    }
    this.setState({
      Notes: previousNotes
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.Notes.map(note => {
          return (
            <NoteComp
              noteContent={note}
              removeNote={this.removeNote}
              key={Math.random()}
            />
          );
        })}
        <footer>
          <input
            type="text"
            placeholder="Write a note here..."
            value={this.state.message}
            onChange={this.handleUserInput}
          />
          <button className="btn btn-primary" onClick={this.addNote}>
            Add Note
          </button>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
