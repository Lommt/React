import React from 'react';

const Message = ({ text }) => {
    return (
        <div className="Message">
            <h1>{text}</h1>
        </div>
    );
};

export default Message;