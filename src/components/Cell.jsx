import CollapseButton from "./CollapseButton";

export default function Cell({
  value,
  position,
  level = 0,
  handleShowChildren = () => {},
  expanded = false,
  hasChildren,
  id
}) {

  function setPaddingLevel(position, level) {
    let result = 0;

    if (position === 0) {
      switch (level) {
        case 1:
          result = 1;
          break;
        case 2:
          result = 3.5;
          break;
        case 3:
          result = 6;
          break;
        case 4:
          result = 10;
          break;
      }
    } else {
      result = 0;
    }    
    return `${result}rem`;
  }

  function setClassLevel(level, expanded, position) {
    let cellClass = "scroll-container row-cell cell-";
    // set grid template area
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
    // set background cell 
    if(level === 4) {
      cellClass += ' cell-collapsed'
    } else if (level < 4){
      if(expanded) {
        cellClass += ' cell-expanded'
      } else {
        cellClass += ' cell-collapsed'
      }
    }
    return cellClass
  }

  return (
    <div
      className={setClassLevel(level, expanded, position)}
      style={{ paddingLeft: setPaddingLevel(position, level) }}
    >
      {level < 4 && position === 0 && (
        <CollapseButton
          handleShowChildren={handleShowChildren}
          expanded={expanded}
          id={id}
        />
      )}
      <div className='standard-cell'>{value}</div>
    </div>
  );
}
