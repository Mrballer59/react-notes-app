import NotesList from "./components/NotesList";
import { useState } from ".react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is my first note", date: "15/05/2005" },
    { id: nanoid(), text: "this is my second note!!", date: "15/04/2021" },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};
export default App;
// start to code
