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
  showLastColumn
}) {

    return (
      <div id={id}
        className={setClassLevel(level, expanded, position, id, showLastColumn)}
        style={{ paddingLeft: setPaddingLevel(position, level) }}
      >
        {level < 4 && position === 0 && (
          <CollapseButton
            handleShowChildren={handleShowChildren}
            expanded={expanded}
            id={id}
            // id={`arrow-${id}`}
            idContainer={idContainer}
          />
        )}
        <div className='standard-cell'>{value}</div>
      </div>
    );

}
