import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import News from './New/New';

export default class Blog extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.news}>
              <News data={item[1]} />
            </View>
          )}
          keyExtractor={(item) => item[0]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  news: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 2,
  },
});
