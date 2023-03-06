import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Inbox from "../components/Inbox";

function InboxPage() {
  const [action, setAction] = useState("none");
  function sendAction(event) {
    setAction(event.target.getAttribute("action"));
  }
  const render = () => {
    if (action == "compose") {
      return <Navigate to="/send" />;
    }
  };
  return (
    <>
      <div>
        <h2>Messages</h2>

        <button action="compose" onClick={sendAction}>
          Compose <i>[]</i>
        </button>
      </div>
      <Inbox />
      {render()}
    </>
  );
}

export default InboxPage;
