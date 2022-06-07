import { MdDeleteForever } from "react-icons/md";
const Note = () => {
  return (
    <div className="note">
      <span>YOO again</span>
      <div>
        <small>21/04/2022</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};
export default Note;
