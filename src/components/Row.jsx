import { rotateArrows, toggleAllContainersChildren, toggleSingleContainerChildren, updateLevel4Cells, updateRootCells } from "../utils/utils";
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
}) {
  const [expanded, setExpanded] = useState(true);
  const [currentContainerChildrenId, setCurrentContainerChildrenId] = useState(null);

  const renderedChildren = children?.map((child, idx) => {    
    return (     
        <Row key={idx} {...child} />
    )
  });

  const handleShowChildren = (idContainer) => {
    setCurrentContainerChildrenId(idContainer)
    setExpanded(!expanded);
  };

  //effect to collapse or expand children container from click in cell (arrow icon)
  useEffect(() => {   
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

  return (
    <>
      {/* row */}
      <div id={id} className={level < 4 ? "bg-row-level-1-to-3 row" : "bg-row-level-4 row"}>  
          {/* cell 1 */}
          <Cell
            value={wbsElement}
            position={0}
            level={level}
            handleShowChildren={handleShowChildren}
            expanded={id === '0' ? true : expanded}
            id={id}
            idContainer={`children-container-${id}`}
            allCollapse={collapse}
          />

          {/* cell 2 */}
          <Cell value={levelDescription} position={1} expanded={expanded} id={id} level={level} allCollapse={collapse}/>

          {/* cell 3 */}
          <Cell value={description} position={2} expanded={expanded} id={id} level={level} allCollapse={collapse}/>

          {/* cell 4 */}
          <Cell value={legalDescription} position={3} expanded={expanded} id={id} level={level} allCollapse={collapse}/>
      </div>     

      {/* children container*/}      
      {children?.length ? 
        (          
          <div id={`children-container-${id}`} class='collapsed'>            
            {renderedChildren}        
          </div>
        ) : null}     
      
    </>
  );
}
