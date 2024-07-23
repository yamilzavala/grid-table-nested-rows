export default function Header({ columns, showLastColumn }) {
  const renderedHeaders = columns.map((col, idx) => {
    let headerClass = "header-cell cell-h";
    switch (idx) {
      case 0:
        headerClass += "a ";
        break;
      case 1:
        headerClass += "b ";
        break;
      case 2:
        if(showLastColumn) {
          headerClass += "c";
        } else {
          headerClass += "c-three-cols"
        }
        break;
      case 3:
        headerClass += "d ";
        break;
    }

    if(showLastColumn && idx === 3){
      return (<div key={idx} className={`${headerClass}`}>
        {col}
      </div>)
    } else if(!showLastColumn && idx === 3){
        return null
    } else {
      return (
        <div key={idx} className={`${headerClass}`}>
          {col}
        </div>
      );
    }
  
  });

  return (
    <div className={`header ${showLastColumn ? 'four-columns-header' : 'three-columns-header'}`} id="myHeader">
      {renderedHeaders}
    </div>
  );
}
