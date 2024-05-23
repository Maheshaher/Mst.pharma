import { useContext } from "react";
import { ContextApi } from "../context/ContextApi";

function Pagination() {
  const { Page, pageHandler, totalPages } = useContext(ContextApi);
  return (
    <div>
      <div className=" h-20 flex gap-9 justify-center p-6 ">
        {Page > 0 && (
          <button
            className="border-2 h-7 px-2 rounded-sm font-semibold"
            onClick={() => pageHandler(Page - 1)}
          >
            Previous
          </button>
        )}
        {Page < totalPages - 1 && (
          <button
            className="border-2 h-7 px-2 rounded-sm font-semibold"
            onClick={() => pageHandler(Page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
