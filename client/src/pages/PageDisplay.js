import { React, useState } from "react";

import Inbox from "../components/Inbox";
//import ConnectPage from "./ConnectPage";

function PageDisplay() {
  const [currentPage, setCurrentPage] = useState("Messages");

  const render = () => {
    if (currentPage === "Messages") {
      return <Inbox />;
    }
  };

  return (
    <section>
      <div>
        <h2>{currentPage}</h2>
        <button>
          Compose <i>[]</i>
        </button>
      </div>
      {render()}
    </section>
  );
}

export default PageDisplay;
