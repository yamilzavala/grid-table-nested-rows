import { HiMiniArrowSmallUp } from "react-icons/hi2";
export default function GoToTopButton({handleSetGoToTop}) {
  return (
    <div className="container-btn" style={{marginTop: '1rem'}}>
      <button className="go-top-btn" onClick={handleSetGoToTop}>
        Go to the top
      </button>
      <HiMiniArrowSmallUp className="collapse-icon" onClick={handleSetGoToTop} />
    </div>
  );
}
