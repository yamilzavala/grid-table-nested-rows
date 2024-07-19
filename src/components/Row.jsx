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

  const handleShowChildren = (id, idContainer) => {
    setCurrentContainerChildrenId(idContainer)
    setExpanded(!expanded);
  };

  //toggle (show or hide a single container id) from click in arrow icon
  function toggleSingleContainerChildren(id) {
    const childrenList = document.querySelectorAll('.expanded, .collapsed');

    childrenList.forEach(item => {
      if(item.id === id) {
        if(expanded) {
          item.classList.remove('collapsed-display')
          item.classList.add('expanded-display')
          setTimeout(() => {
            item.classList.remove('collapsed')
            item.classList.add('expanded')
          }, 50)
        } else {
          item.classList.remove('expanded')
          item.classList.add('collapsed')
          setTimeout(() => {
            item.classList.remove('expanded-display')
            item.classList.add('collapsed-display')            
          }, 500)
        }
      }
    })

    //allways expand first row
    if(childrenList[0].id === 'children-container-0') {
      childrenList[0].classList.remove('collapsed')
      childrenList[0].classList.add('expanded')
    }
  }

  //effect to collapse or expand children container from click in cell (arrow icon)
  useEffect(() => {   
    toggleSingleContainerChildren(currentContainerChildrenId)
  }, [expanded]);

    //toggle all containers
    function toggleAllContainersChildren() {
      const childrenList = document.querySelectorAll('.expanded, .collapsed');
      childrenList.forEach(item => {    
            if(expanded) {     
              if(item.id !== 'children-container-0') {
                item.classList.remove('collapsed-display')
                item.classList.add('expanded-display')
                setTimeout(() => {
                  item.classList.remove('collapsed')
                  item.classList.add('expanded')
                }, 50)
              }      
            } else {
              if(item.id !== 'children-container-0') {
                item.classList.remove('expanded')
                item.classList.add('collapsed')
                setTimeout(() => {
                  item.classList.remove('expanded-display')
                  item.classList.add('collapsed-display')            
                }, 500)
               }
            }
      })
      //validation to first row
      if(childrenList[0].id === 'children-container-0') {
        childrenList[0].classList.remove('collapsed')
        childrenList[0].classList.remove('collapsed-display')
        childrenList[0].classList.add('expanded')
      }
    }
  
    function updateRootCells() {
      //get rootRows
      const rowList = document.querySelectorAll('.row');
      rowList.forEach(_ => {    
           //get cells
           const rootCells = document.querySelectorAll('.row-cell');
           rootCells.forEach(cell => {             
              //EXPANDED  
              if(!expanded) {  
                if(cell.id !== '0') {    
                  cell.classList.remove('cell-expanded')
                  cell.classList.add('cell-collapsed')  
                } else { //fisrt row
                    cell.classList.remove('cell-collapsed')
                    cell.classList.add('cell-expanded')                        
                }    
                //COLLAPSED                        
              } else { 
                  cell.classList.remove('cell-collapsed')
                  cell.classList.add('cell-expanded') 
              }     
            })       
      })  
    }

    //level 4 - set collapsed class
    function updateLevel4Cells() {
      const level4List = document.querySelectorAll('.level-4');
      level4List.forEach(cell => {
        cell.classList.remove('cell-expanded')
        cell.classList.add('cell-collapsed')      
      })
    }

    //rotate arrow with global click
    function rotateArrows() {
      const arrowsList = document.querySelectorAll('.btn-arrow');
      arrowsList.forEach(arrow => {
        if(expanded) {
          arrow.classList.add('btn-arrow-rotated')
        } else {
          arrow.classList.remove('btn-arrow-rotated')
        }
      })
    }
  
    //effect to collapse or expand children container from "Expand all" / "Collapse all" button
    useEffect(() => {   
      setExpanded(!expanded);
      toggleAllContainersChildren()
      updateRootCells();
      updateLevel4Cells();
      rotateArrows();
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
