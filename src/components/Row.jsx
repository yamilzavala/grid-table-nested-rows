import { rotateArrows, rotateSingleArrow, toggleAllContainersChildren, toggleSingleContainerChildren, updateLevel4Cells, updateRootCells } from "../utils/utils";
import Cell from "./Cell";
import { useState, useEffect } from "react";
export default function Row({
  wbsElement,
  level,
  levelDescription,
  description,
  legalDescription,
  children,
  collapse,
  id,
  showLastColumn
}) {
  const [expanded, setExpanded] = useState(!collapse);
  const [currentContainerChildrenId, setCurrentContainerChildrenId] = useState(null);
  //const [currentCellId, setCurrentCellId] = useState(null);
 
  const renderedChildren = children?.map((child, idx) => {    
    return (     
        <Row key={idx} {...child} showLastColumn={showLastColumn}/>
    )
  });

  const handleShowChildren = (idContainer, cellId) => {
    setCurrentContainerChildrenId(idContainer)
//    setCurrentCellId(cellId)
    setExpanded(!expanded);
  };

  //effect to collapse or expand a single container from click in cell (arrow icon)
  useEffect(() => {   
    //rotateSingleArrow(expanded, currentCellId);
    toggleSingleContainerChildren(currentContainerChildrenId, expanded)
  }, [expanded]);   

  //effect to collapse or expand children container from "Expand all" / "Collapse all" button
  useEffect(() => {      
      setExpanded(!expanded);
      toggleAllContainersChildren(expanded)
      updateRootCells(expanded);
      updateLevel4Cells();
      rotateArrows(expanded);
  }, [collapse]);

  useEffect(() => {           
      updateRootCells(expanded);
      updateLevel4Cells();
  }, [showLastColumn]);

  function getRowClassContainer(level, showLastColumn) {
    let classes = `row `

    if(showLastColumn) {
      classes += ' four-columns-row '
    } else {
      classes += ' three-columns-row '
    }

    if (level < 4) {
      classes += 'bg-row-level-1-to-3 '
    } else {
       classes += 'bg-row-level-4 '
    }
    return classes;
  }

  return (
    <>
      {/* row */}
      <div id={id} className={getRowClassContainer(level, showLastColumn)}>  
          {/* cell 1 */}
          <Cell
            value={wbsElement}
            position={0}
            level={level}
            handleShowChildren={handleShowChildren}
            expanded={id === '0' ? true : expanded}
            id={id}
            idContainer={`children-container-${id}`}
          />

          {/* cell 2 */}
          <Cell value={levelDescription} position={1} expanded={expanded} id={id} level={level} />

          {/* cell 3 */}
          <Cell value={description} position={2} expanded={expanded} id={id} level={level} showLastColumn={showLastColumn}/>

          {/* cell 4 */}
         {showLastColumn && <Cell value={legalDescription} position={3} expanded={expanded} id={id} level={level}/>}
      </div>     

      {/* children container*/}      
      {children?.length ? 
        (          
          <div id={`children-container-${id}`} className='collapsed'>            
            {renderedChildren}        
          </div>
        ) : null
      }           
    </>
  );
}
