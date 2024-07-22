import Table from "./Table";
import { useState, useEffect } from "react";
import { dataLevelsNested, columns } from "../data/data";

export default function ContainerTable() {
  const [rows, setData] = useState([]); //this state fetch levels from endpoint

  useEffect(() => {
    // setTimeout(() => {
       setData(dataLevelsNested);
    // }, 10000)
  }, []);

  return (
    <main>
      <Table rows={rows} columns={columns} />
    </main>
  );
}
