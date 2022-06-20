import { useState } from "react";

const AddNote = () => {
  const [noteText, setNotesText] = useState("");
  const handleChange = (event) => {
    setNotesText(event.target.event.value);
  };
  const handleChange = () => {};
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining </small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
// got some bugs need to fix
