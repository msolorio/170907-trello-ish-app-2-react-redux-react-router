import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './Home';
import Board from './Board';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Link to="/">Go Home</Link>
            <Route exact path="/" component={Home}/>
            <Route exact path="/board/:boardId" component={Board}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(App);
