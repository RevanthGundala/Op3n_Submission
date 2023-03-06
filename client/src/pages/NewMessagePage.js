import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import MessageForm from "../components/MessageForm";

function NewMessagePage() {
    const [action, setAction] = useState('none')
    function sendAction(event){
        setAction(event.target.getAttribute('action'));
    }
    const render = () => {
        if (action == "back") {
            return <Navigate to='/' />;
        }
    };
    return (
        <>
            <div>
                <h2>New Message</h2>
                <button action='back' onClick={sendAction}>Cancel <i>[]</i></button>
            </div>
            <MessageForm />
            {render()}
        </>
    );
}

export default NewMessagePage;
