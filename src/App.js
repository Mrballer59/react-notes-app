import NotesList from "./components/NotesList";
import { useState } from ".react";

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is my first note", date: "15/05/2005" },
  ]);
  return (
    <div className="container">
      <NotesList />
    </div>
  );
};
export default App;
// start to code
