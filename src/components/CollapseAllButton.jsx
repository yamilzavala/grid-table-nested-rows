import { CgArrowsScrollV } from "react-icons/cg";
import { TbArrowsDiagonal } from "react-icons/tb";
export default function CollapseAllButton({ allCollapse, handleCollapse }) {
  return (
    <>
      {allCollapse ? (
        <div className="container-btn" onClick={handleCollapse}>
          <button className="collapse-all-btn" >
            Expand all items
          </button>
          <TbArrowsDiagonal
            className="collapse-icon"
          />
        </div>
      ) : (
        <div className="container-btn" onClick={handleCollapse}>
          <button className="collapse-all-btn" >
            Collapse all items
          </button>
          <CgArrowsScrollV
            className="collapse-icon collapse-rotate-icon"
          />
        </div>
      )}
    </>
  );
}
