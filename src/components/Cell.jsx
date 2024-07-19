import { useEffect } from "react";
import CollapseButton from "./CollapseButton";
import { setClassLevel, setPaddingLevel } from "../utils/utils";

export default function Cell({
  value,
  position,
  level,
  handleShowChildren,
  expanded,
  id,
  idContainer,
  allCollapse
}) {

 return (
    <div id={id}
      className={setClassLevel(level, expanded, position, id, allCollapse)}
      style={{ paddingLeft: setPaddingLevel(position, level) }}
    >
      {level < 4 && position === 0 && (
        <CollapseButton
          handleShowChildren={handleShowChildren}
          expanded={expanded}
          id={id}
          idContainer={idContainer}
          allCollapse={allCollapse}
        />
      )}
      <div className='standard-cell'>{value}</div>
    </div>
  );
}
