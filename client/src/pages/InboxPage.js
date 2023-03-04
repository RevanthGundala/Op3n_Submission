import React from "react";
import Inbox from "../components/Inbox";

function InboxPage() {
    return (
        <>
        <div>
            <h2>Messages</h2>
            <button>Compose <i>[]</i></button>
            <Inbox />
        </div>
        </>
    );
}

export default InboxPage;
