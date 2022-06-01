import React from "react";

function User(props) {
  return (
    <span className='user'>
      <span className='name'>{props.name} </span>
    </span>
  );
}

export default User;
