import React from 'react';

const Idea = ({title, body, id}) => {
  return (
    <div>
      <h1>{title} - {id}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Idea;
