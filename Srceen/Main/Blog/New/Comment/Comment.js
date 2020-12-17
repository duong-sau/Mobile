import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';
import CommentImage from './CommentImage';
let finish = false;
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      authorPhoto: '',
    };
  }

  componentDidMount() {

  }
  render() {
    const renderData = Object.entries(this.props.data);
    return (
      <View>
        <FlatList
          data={renderData}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.view}>
              <CommentImage data={item[1].authorImage} />
              <View style={styles.content}>
                <Text style={styles.comment}>
                  {item[1].author}: {item[1].caption}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item[0]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
  },
  comment: {
    marginLeft: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
});
