import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import CollapseButton from "./CollapseButton";

export default function Cell({
  value,
  position,
  level = 0,
  handleShowChildren = () => {},
  expanded = false,
  hasChildren,
}) {
  let cellClass = "scroll-container row-cell cell-";
  switch (position) {
    case 0:
      cellClass += "a";
      break;
    case 1:
      cellClass += "b";
      break;
    case 2:
      cellClass += "c";
      break;
    case 3:
      cellClass += "d";
      break;
  }

  function setPaddingLevel(level) {
    let result = 0;
    switch (level) {
      case 1:
        result = 1;
        break;
      case 2:
        result = 3;
        break;
      case 3:
        result = 5;
        break;
      case 4:
        result = 10;
        break;
    }
    return `${result}rem`;
  }
  // className={isActive ? 'active' : ''}
  return (
    <div
      className={
        expanded && level !== 4
          ? `${cellClass} cell-expanded`
          : `${cellClass} cell-collapsed`
      }
      style={{ paddingLeft: setPaddingLevel(level) }}
    >
      {/* {level < 4 && position === 0 && hasChildren && ( */}
      {level < 4 && position === 0 && (
        <CollapseButton
          handleShowChildren={handleShowChildren}
          expanded={expanded}
        />
      )}
      {/* <div class="standard-cell">{value}</div> */}
      <div class={expanded ? "standard-cell" : "standard-cell"}>{value}</div>
    </div>
  );
}
