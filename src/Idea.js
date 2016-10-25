import React from 'react';

const Idea = ({title, body, id, handleDelete}) => {
  return (
    <div className='Idea'>
      <h1>{title} - {id}</h1>
      <p>{body}</p>
      <button onClick={ () => handleDelete(id) }>
        Delete
      </button>
    </div>
  );
}

export default Idea;
