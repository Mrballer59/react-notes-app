import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "15/04/2022",
    },
  ]);
  const AddNote = (text) => {
    console.log(text);
  };
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={AddNote} />
    </div>
  );
};
export default App;
