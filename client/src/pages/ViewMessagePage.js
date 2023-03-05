import React from "react";
import { useParams } from "react-router-dom";
import DisplayMessage from "../components/DisplayMessage";

function ViewMessagePage() {
    const { msgAddress } = useParams();
    //GET MESSAGE DATA USING ADDRESS
    const msgData = {
        address: 'ADDRESS',
        sender: 'SENDER',
        date: 'DATE',
        subject: 'SUBJECT',
        content: 'CONTENT'
    }

    return (
        <>
            <div>
                <h2>View Message</h2>
                <button>Reply <i>[]</i></button>
            </div>
            <DisplayMessage messageData={msgData}/>
        </>
    );
}

export default ViewMessagePage;