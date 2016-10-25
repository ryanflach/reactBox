import React from 'react';
import Idea from './Idea';

const IdeasList = ({ideas}) => {
  return (
    <div>
      {ideas.map((idea) => <Idea {...idea} key={idea.id}/>)}
    </div>
  );
}

export default IdeasList;
