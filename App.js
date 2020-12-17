/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import NaviBar from './Navi/NaviBar';
global.userImage =
  'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-7.jpg';
global.logIn = false;
export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <NaviBar />
      </>
    );
  }
}
