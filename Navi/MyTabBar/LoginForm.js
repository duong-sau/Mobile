import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: 'User Name',
      Password: 'Password',
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={(text) => this.setState({UserName: text})}
          value={this.state.UserName}
          onFocus={() => {
            if (this.state.UserName === 'User Name') {
              this.setState({UserName: ''});
            } else {
            }
          }}
        />
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={(text) => this.setState({Password: text})}
          value={this.state.Password}
          onFocus={() => {
            if (this.state.Password === 'Password') {
              this.setState({Password: ''});
            } else {
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    width: '50%',
    borderColor: 'red',
  },
  textInput: {
    marginTop: 10,
    width: '100%',
    height: 50,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'justify',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
  },
});
