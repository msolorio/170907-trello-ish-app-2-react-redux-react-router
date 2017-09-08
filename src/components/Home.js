import React from 'react';
import { connect } from 'react-redux';
import { changeInput, addBoard } from '../actions';
import BoardsList from './BoardsList';

export function Home(props) {
  function onInputChange(e) {
    console.log(e.target.value);
    props.dispatch(changeInput(e.target.value));
  }

  function onFormSubmit(e) {
    e.preventDefault();

    props.dispatch(addBoard(props.inputVal));
    props.history.push(`/board/${props.inputVal}`);
    props.dispatch(changeInput(''));
  }

  return (
    <div className="Home">
      <form onSubmit={onFormSubmit}>
        <h3>Create a Board</h3>

        <label>Board Name: </label>
        <input placeholder="coolboard"
          value={props.inputVal}
          onChange={onInputChange}/>
        <button type="submit">Create Board</button>
      </form>

      <BoardsList boards={props.boards} />
    </div>
  );
};

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(Home);
