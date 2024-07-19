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
    // const childProps = {
    //   ...child,
    //   id: idx + 1,
    // }
    return (     
      // <Row key={idx} {...childProps } />
        <Row key={idx} {...child} />
    )
  });

  const handleShowChildren = (id, idContainer) => {
    console.log('ID from row...', id)
    // setCurrentContainerChildrenId(id)
    setCurrentContainerChildrenId(idContainer)
    console.log('container ID:', currentContainerChildrenId)
    setExpanded(!expanded);
  };

  //toggle all containers
  function toggleAllContainersChildren() {
    const childrenList = document.querySelectorAll('.expanded, .collapsed');
    childrenList.forEach(item => {
      //allways expand first row
      // if(item.id === '0') {
     
      // if(item.id === 'children-container-0') {
      //    item.classList.remove('collapsed')
      //    item.classList.add('expanded')
      // } else {
      //   if(expanded) {
      //     item.classList.remove('collapsed')
      //     item.classList.add('expanded')
      //   } else {
      //     item.classList.remove('expanded')
      //     item.classList.add('collapsed')
      //   }
      // }
   
      
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

  //effect to collapse or expand children container from "Expand all" / "Collapse all" button
  useEffect(() => {   
    // console.log('COLLAPSE from row:....', collapse)
    // console.log('EXPANDED from row:....', expanded)
    setExpanded(!expanded);
    toggleAllContainersChildren()
  }, [collapse]);

  //toggle single container from arrow icon
  function toggleSingleContainerChildren(id) {
    console.log('container ID: ', id)   
    const childrenList = document.querySelectorAll('.expanded, .collapsed');

    childrenList.forEach(item => {
      console.log('item.id: ', item.id)
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
    // if(item.id === '0') {
    if(childrenList[0].id === 'children-container-0') {
      childrenList[0].classList.remove('collapsed')
      childrenList[0].classList.add('expanded')
    }
  }

  //effect to collapse or expand children container from cell table (arrow icon)
  useEffect(() => {   
    toggleSingleContainerChildren(currentContainerChildrenId)
  }, [expanded]);


  // console.log('id:....', id)

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
            // expanded={id === '0' ? true : expanded}
            expanded={expanded}
            id={id}
            idContainer={`children-container-${id}`}
          />

          {/* cell 2 */}
          <Cell value={levelDescription} position={1} expanded={expanded} id={id} level={level}/>

          {/* cell 3 */}
          <Cell value={description} position={2} expanded={expanded} id={id} level={level}/>

          {/* cell 4 */}
          <Cell value={legalDescription} position={3} expanded={expanded} id={id} level={level}/>
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
