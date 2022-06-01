import React from "react";

function Message(props) {
  return (
    <span className='user'>
      <span className='message'>{props.name} </span>
    </span>
  );
}

export default Message;
