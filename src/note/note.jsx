import React, { Component } from "react";
import "./note.css";

class NoteComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeItem = value => {
    this.props.removeNote(value);
  };

  render() {
    return (
      <div className="note">
        <span
          className="remove-btn"
          onClick={() => this.removeItem(this.props.noteContent)}
        >
          &times;
        </span>
        {this.props.noteContent}
      </div>
    );
  }
}

export default NoteComp;
