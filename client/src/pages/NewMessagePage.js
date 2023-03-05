import React from "react";
import MessageForm from "../components/MessageForm";

function NewMessagePage() {
    return (
        <>
            <div>
                <h2>New Message</h2>
                <button>Cancel <i>[]</i></button>
            </div>
            <MessageForm />
        </>
    );
}

export default NewMessagePage;
