/**
 * vùng nhập dữ liệu
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
const defaultText = 'Bạn đang nghĩ gì';
export default class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText,
    };
  }
  getText() {
    return this.state.text;
  }
  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          onFocus={() => {
            if (this.state.text === defaultText) {
              this.setState({text: ''});
            } else {
            }
          }}
        />
        <TouchableOpacity style={styles.submit}>
          <Text> Đăng</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: 320,
  },
  textInput: {
    width: '100%',
    height: 300,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'justify',
  },
  submit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(66,103,178)',
    width: '100%',
    height: 50,
  },
});
