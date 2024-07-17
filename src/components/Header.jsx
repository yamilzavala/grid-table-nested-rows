export default function Header({ columns }) {
  const renderedHeaders = columns.map((col, idx) => {
    let headerClass = "header-cell cell-h";
    switch (idx) {
      case 0:
        headerClass += "a";
        break;
      case 1:
        headerClass += "b";
        break;
      case 2:
        headerClass += "c";
        break;
      case 3:
        headerClass += "d";
        break;
    }
    return (
      <div key={idx} className={`${headerClass}`}>
        {col}
      </div>
    );
  });

  return (
    <div className="header" id="myHeader">
      {renderedHeaders}
    </div>
  );
}
