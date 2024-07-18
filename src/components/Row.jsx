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
  const [expanded, setExpanded] = useState(false);
  const [currentContainerChildrenId, setCurrentContainerChildrenId] = useState(null);

  const renderedChildren = children?.map((child, idx) => {    
    const childProps = {
      ...child,
      id: idx + 1,
    }
    return (     
        <Row key={idx} {...childProps } />
    )
  });

  const handleShowChildren = (id) => {
    setExpanded(!expanded);
    setCurrentContainerChildrenId(id)
  };

  //toggle all containers
  function toggleAllContainersChildren() {
    const childrenList = document.querySelectorAll('.expanded, .collapsed');
    childrenList.forEach(item => {
      if(Number(item.id) === 0) {
         item.classList.remove('collapsed')
         item.classList.add('expanded')
      } else {
        if(expanded) {
          item.classList.remove('collapsed')
          item.classList.add('expanded')
        } else {
          item.classList.remove('expanded')
          item.classList.add('collapsed')
        }
      }
    })
  }

  //effect to collapse or expand children container from "Expand all" / "Collapse all"
  useEffect(() => {   
    setExpanded(!expanded);
    toggleAllContainersChildren()
  }, [collapse]);

  //toggle single container
  function toggleSingleContainerChildren(id) {
    const childrenList = document.querySelectorAll('.expanded, .collapsed');

    childrenList.forEach(item => {
      if(Number(item.id) === Number(id)) {
        if(expanded) {
          item.classList.remove('collapsed')
          item.classList.add('expanded')
        } else {
          item.classList.remove('expanded')
          item.classList.add('collapsed')
        }
      }

      if(Number(item.id) === 0) {
        item.classList.remove('collapsed')
        item.classList.add('expanded')
      }
    })
  }

  //effect to collapse or expand children container from table
  useEffect(() => {   
    toggleSingleContainerChildren(currentContainerChildrenId)
  }, [expanded]);

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
            expanded={id === 0 ? true : expanded}
            hasChildren={children?.length > 0}
            id={id}
          />

          {/* cell 2 */}
          <Cell value={levelDescription} position={1} expanded={id === 0 ? true : expanded} id={id} level={level}/>

          {/* cell 3 */}
          <Cell value={description} position={2} expanded={id === 0 ? true : expanded} id={id} level={level}/>

          {/* cell 4 */}
          <Cell value={legalDescription} position={3} expanded={id === 0 ? true : expanded} id={id} level={level}/>
      </div>     

      {/* children */}      
      {children?.length ? 
        (          
          <div id={id} class='expanded'>            
            {renderedChildren}        
          </div>
        ) : null}     
      
    </>
  );
}
