import React from "react";

function MessageForm() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <form id="message-form" onSubmit={handleFormSubmit}>
        </form>
    );
}

export default MessageForm;
