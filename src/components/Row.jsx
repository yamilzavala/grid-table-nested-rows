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
    return <Row key={idx} {...child} />;
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
        />

        {/* cell 2 */}
        <Cell value={levelDescription} position={1} expanded={expanded} />

        {/* cell 3 */}
        <Cell value={description} position={2} expanded={expanded} />

        {/* cell 4 */}
        <Cell value={legalDescription} position={3} expanded={expanded} />
      </div>
      {/* children */}
      <div className={expanded ? "expanded" : "collapsed"}>
        {rendrerChildren}
      </div>
    </>
  );
}
