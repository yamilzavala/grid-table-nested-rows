import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function CollapseButton({ handleShowChildren, expanded, id }) {
  return (
    <button disabled={id === 0} onClick={() => handleShowChildren(id)} className="btn-arrow">
      {expanded ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
    </button>
  );
}
