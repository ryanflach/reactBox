import React from 'react';
import Idea from './Idea';

const IdeasList = ({ideas, handleDelete}) => {
  return (
    <div>
      {ideas.map((idea) => <Idea {...idea} key={idea.id} handleDelete={handleDelete}/>)}
    </div>
  );
}

export default IdeasList;
