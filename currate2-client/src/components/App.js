import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import ChatsForm from './chats/ChatsForm';
import SignupForm from './signup/SignupForm';
import SigninForm from './signin/SigninForm';
import MyPage from './mypage/MyPage';
import Withdraw from './withdraw/Withdraw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: ''
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="container">
            <Route component={Header} />
            <Route exact path="/" render={() => <Landing />} />
            <Route path="/signup/signupform" render={() => <SignupForm />} />
            <Route path="/signin/signinform" render={() => <SigninForm />} />
            <Route
              path="/mypage"
              render={() =>
                this.state.isSignedIn || this.props.auth ? (
                  <MyPage />
                ) : (
                  <SigninForm />
                )
              }
            />
            <Route
              path="/withdraw"
              render={() =>
                this.state.isSignedIn || this.props.auth ? (
                  <Withdraw />
                ) : (
                  <SigninForm />
                )
              }
            />
            <Route
              path="/chats"
              render={() =>
                this.state.isSignedIn || this.props.auth ? (
                  <ChatsForm />
                ) : (
                  <SigninForm />
                )
              }
            />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, actions)(App);
