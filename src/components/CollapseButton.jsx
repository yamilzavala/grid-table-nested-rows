import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function CollapseButton({ handleShowChildren, expanded }) {
  return (
    <button onClick={handleShowChildren} className="btn-arrow">
      {expanded ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
    </button>
  );
}
