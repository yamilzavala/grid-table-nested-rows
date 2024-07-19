import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function CollapseButton({ handleShowChildren, expanded, id, idContainer, allCollapse }) {
  return (
    <>
      {expanded ? (
        <button disabled={id === '0'} onClick={() => handleShowChildren(id, idContainer)} className="btn-arrow">
          <MdOutlineKeyboardArrowUp />
        </button>
      ) : (
        <button disabled={id === '0'} onClick={() => handleShowChildren(id, idContainer)} className="btn-arrow btn-arrow-rotated">
        <MdOutlineKeyboardArrowUp /> 
      </button>
      )}    
    </>
    
  );
}
