import React from 'react';

export default function BoardsList(props) {
  const list = Object.keys(props.boards).map((board, index) => {
    return (
      <li key={index}>{board}</li>
    );
  })


  return (
    <ul className="BoardsList">
      Boards Already Created
      {list}
    </ul>
  );
};
