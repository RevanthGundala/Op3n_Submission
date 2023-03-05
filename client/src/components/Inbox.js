import React from "react";
import MessageListed from "./MessageListed";

function Inbox() {
    let messages = [{from: "WALLET1", subject:"Subject1", date: "DATE", address: "1"}, {from: "WALLET2", subject:"Subject2", date: "DATE", address: "2"}]
    return (
        <div className="inbox-container">
            <MessageListed message={{from: "From", subject:"Subject", date:"Date"}} />
            {(messages || []).map((item, index ) => (
                <MessageListed key={index} message={item} />
            ))}
        </div>
    );
}

export default Inbox;