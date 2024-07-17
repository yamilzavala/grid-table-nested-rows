import Table from "./Table";
import { useState, useEffect } from "react";
import { dataLevelsNested, columns } from "../data/data";

export default function ContainerTable() {
  const [rows, setData] = useState([]); //this state fetch levels from endpoint

  useEffect(() => {
    setData(dataLevelsNested);
  }, []);

  return (
    <main>
      <Table rows={rows} columns={columns} />
    </main>
  );
}
