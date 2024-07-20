import {
  //MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function CollapseButton({ handleShowChildren, expanded, id, idContainer}) {
  return (
    <>
      {expanded ? (
        <button id={id} disabled={id === '0'} onClick={() => handleShowChildren(idContainer)} className="btn-arrow ">
          <MdOutlineKeyboardArrowUp />
        </button>
      ) : (
        <button id={id} disabled={id === '0'} onClick={() => handleShowChildren(idContainer)} className="btn-arrow btn-arrow-rotated">
          <MdOutlineKeyboardArrowUp /> 
        </button>
      )}    
    </>
    
  );
}
