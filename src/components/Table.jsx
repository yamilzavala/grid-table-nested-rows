import { useState } from "react";
import GoToTopButton from "./GoTopButton";
import CollapseAllButton from "./CollapseAllButton";
import RowList from "./RowList";
import ShimmerSkeleton from "./ShimmerSkeleton";

export default function Table({ rows, columns }) {
  const [allCollapse, setAllCollapse] = useState(true);
  const [goToTop, setGoToTop] = useState(false);

  const handleCollapse = () => {  
    setAllCollapse(prev => !prev);     
  };

  const handleSetGoToTop = () => {
    setGoToTop(!goToTop)
  }

  return (
    <section className="section-container-table">
      {rows.length ? (
       <div className="container-table">
        <CollapseAllButton
          allCollapse={allCollapse}
          handleCollapse={handleCollapse}
        />      
        <RowList goToTop={goToTop} rows={rows} allCollapse={allCollapse} columns={columns}/>
        <GoToTopButton handleSetGoToTop={handleSetGoToTop}/>
       </div> 
      ) : (
        <ShimmerSkeleton/>
      )}
      
    </section>
  );
}
