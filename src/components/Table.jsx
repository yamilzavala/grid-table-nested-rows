import { useState } from "react";
import Header from "./Header";
import Row from "./Row";
import GoToTopButton from "./GoTopButton";
import CollapseAllButton from "./CollapseAllButton";
import RowList from "./RowList";

export default function Table({ rows, columns }) {
  const [allCollapse, setAllCollapse] = useState(false);
  const [goToTop, setGoToTop] = useState(false);
  // const renderedRows = rows.map((row,idx) => (
  //   <Row id={idx} key={row.id} {...row} collapse={allCollapse} />
  // ));

  const handleCollapse = () => {
    setAllCollapse(!allCollapse);
  };

  const handleSetGoToTop = () => {
    setGoToTop(!goToTop)
  }

  return (
    // <div className="container section-center">
    <section className="container-2">
      <CollapseAllButton
        allCollapse={allCollapse}
        handleCollapse={handleCollapse}
      />
      {/* <Header columns={columns} /> */}
      {/* <div className="rows-container">
        {renderedRows}
      </div> */}
      <RowList goToTop={goToTop} rows={rows} allCollapse={allCollapse} columns={columns}/>
      <GoToTopButton handleSetGoToTop={handleSetGoToTop}/>
    </section>
    // </div>
  );
}
