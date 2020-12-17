import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
export default class CommentImage extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    const renderData = this.props.data;
    return (
      <View style={styles.view}>
        <Image
          style={styles.naviImage}
          source={{
            uri: renderData,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  naviImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    paddingBottom: 5,
  },
  name: {
    paddingLeft: 10,
  },
});
