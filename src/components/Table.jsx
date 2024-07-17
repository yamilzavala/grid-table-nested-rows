import { useState } from "react";
import Header from "./Header";
import Row from "./Row";
import GoToTopButton from "./GoTopButton";
import CollapseAllButton from "./CollapseAllButton";
import RowList from "./RowList";

export default function Table({ rows, columns }) {
  const [allCollapse, setAllCollapse] = useState(false);
  const [goToTop, setGoToTop] = useState(false);

  const handleCollapse = () => {
    setAllCollapse(!allCollapse);
  };

  const handleSetGoToTop = () => {
    setGoToTop(!goToTop)
  }

  return (
    <section className="container-2">
      <CollapseAllButton
        allCollapse={allCollapse}
        handleCollapse={handleCollapse}
      />      
      <RowList goToTop={goToTop} rows={rows} allCollapse={allCollapse} columns={columns}/>
      <GoToTopButton handleSetGoToTop={handleSetGoToTop}/>
    </section>
  );
}
