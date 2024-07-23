import Table from "./Table";
import { useState, useEffect } from "react";
import { dataLevelsNested, columns } from "../data/data";

export default function ContainerTable() {
  const [rows, setData] = useState([]); //this state fetch levels from endpoint
  const [showLastColumn, setShowLastColumn] = useState(true)
  
  const toggleLastColumn = () => {
    setShowLastColumn(!showLastColumn);
  };

  useEffect(() => {
    setTimeout(() => {
      setData(dataLevelsNested);
    }, 1500)
  }, []);

  return (
    <main>
      <button onClick={toggleLastColumn}>
        {showLastColumn ? 'hide last column' : 'show last column'}
      </button>

      <Table rows={rows} columns={columns} showLastColumn={showLastColumn}/>
    </main>
  );
}
