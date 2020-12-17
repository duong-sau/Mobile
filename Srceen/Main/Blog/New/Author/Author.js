import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
export default class Author extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Image
          style={styles.naviImage}
          source={{
            uri: this.props.image,
          }}
        />
        <Text style={styles.name}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  naviImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    paddingBottom: 5,
  },
  name: {
    fontSize: 15,
    fontFamily: '',
    paddingLeft: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
});
