import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Header extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.name}>FACEBOOK</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.press();
          }}>
          <Text style={styles.name}>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(66,103,178)',
    width: '100%',
    height: 100,
  },
  name: {
    marginTop: 50,
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
