import React from 'react';

export default function Board(props) {
  return (
    <div className="Board">
      Board Id: {props.match.params.boardId}
    </div>
  );
};
