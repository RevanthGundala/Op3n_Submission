import React from "react";

function MessageListed(props) {
    let {from, subject, date} = props.message
    return (
        <div className="listedMessage">
            <div>{subject}</div>
            <div>{from}</div>
            <div>{date}</div>
        </div>
    );
}

export default MessageListed;