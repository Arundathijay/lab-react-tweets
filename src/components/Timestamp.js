import React from "react";

function Timestamp(props) {
  return (
    <span className='user'>
      <span className='time'>{props.time} </span>
    </span>
  );
}

export default Timestamp;
