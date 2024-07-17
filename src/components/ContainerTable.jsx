import Table from "./Table";
import { useState, useEffect } from "react";
import { dataLevels, columns } from "../data/data";

export default function ContainerTable() {
  const [rows, setData] = useState([]); //this state fetch levels from endpoint
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setData(dataLevels);
  }, []);

  return (
    // <main className="main-container">
    <main>
      <Table rows={rows} columns={columns} />
    </main>
  );
}
