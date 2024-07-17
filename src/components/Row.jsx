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
  id
}) {
  const [expanded, setExpanded] = useState(false);
  const rendrerChildren = children?.map((child, idx) => {
    const idIncreased = idx+1;
    return (<div id={idIncreased} className={expanded ? "expanded" : "collapsed"}>
      <Row key={idx} {...child } />
    </div>)
  });

  const handleShowChildren = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {   
      if (collapse) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    //REFACTOR
    // if (id === 0) {
    //   console.log('ID first: ', id)
    //   setExpanded(true);
    // } else if(id > 0) {
    //   console.log('ID: ', id)
    //   if (collapse) {
    //     setExpanded(false);
    //   } else {
    //     setExpanded(true);
    //   }
    // }
  }, [collapse]);

  return (
    <>
      <div id={id}
        className={level < 4 ? "bg-row-level-1-to-3 row" : "bg-row-level-4 row"}
      >
        {/* cell 1 */}
        <Cell
          value={wbsElement}
          position={0}
          level={level}
          handleShowChildren={handleShowChildren}
          expanded={expanded}
          hasChildren={children?.length > 0}
          id={id}
        />

        {/* cell 2 */}
        <Cell value={levelDescription} position={1} expanded={expanded} id={id} level={level}/>

        {/* cell 3 */}
        <Cell value={description} position={2} expanded={expanded} id={id} level={level}/>

        {/* cell 4 */}
        <Cell value={legalDescription} position={3} expanded={expanded} id={id} level={level}/>
      </div>
      {/* children */}      
        {rendrerChildren}
    </>
  );
}
