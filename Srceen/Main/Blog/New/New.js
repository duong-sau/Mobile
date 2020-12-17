import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Author from './Author/Author';
import TabBar from './TabBar/TabBar';
import Comment from './Comment/Comment';
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      authorName: '',
      authorPhoto: '',
      comment: false,
      limit: 4,
      dialog: false,
    };
  }
  componentDidMount() {}
  render() {
    const renderData = this.props.data;
    return (
      <View>
        <Author image={renderData.authorImage} name={renderData.author} />
        <Text style={styles.caption}>{renderData.caption}</Text>
        <Image
          source={{
            uri: renderData.image,
          }}
          style={styles.image}
        />

        <TabBar />
        <Comment data={renderData.comment} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  caption: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
