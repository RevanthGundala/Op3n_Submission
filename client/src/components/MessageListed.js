import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MessageListed(props) {
  let { from, subject, date, address, content } = props.message;
  if (from.toString().substring(0, 2) === "0x") {
    from = from.toString();
    from = from.substring(0, 5) + "..." + from.substring(36);
  }
  const encodedStr = encodeURIComponent(JSON.stringify(props.message));
  const [action, setAction] = useState("null");
  function sendAction(event) {
    setAction(event.target.getAttribute("action"));
  }
  const render = () => {
    if (action != "null") {
      return <Navigate to={`/view/${encodedStr}`} />;
    }
  };
  return (
    <div className="listedMessage" onClick={sendAction} action={encodedStr}>
      <div>{from}</div>
      <div>{subject}</div>
      <div>{date}</div>
      {render()}
    </div>
  );
}

export default MessageListed;
