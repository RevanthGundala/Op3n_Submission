import React from "react";

function DisplayMessage(props) {
    const {content, subject, sender, date} = props
    return (
        <div className="DisplayMessage-container">
            <h3>{subject}</h3>
            <h4>{date}</h4>
            <div>From: {sender}</div>
            <div>{content}</div>
        </div>
    );
}

export default DisplayMessage;