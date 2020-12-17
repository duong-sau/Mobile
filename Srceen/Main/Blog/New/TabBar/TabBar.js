import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: false,
      value: '',
    };
  }
  open() {
    this.setState({
      comment: !this.state.comment,
    });
  }
  comment() {}
  componentDidMount() {}
  render() {
    return (
      <View>
        <View style={styles.toolView}>
          <View style={styles.tool}>
            <Text style={styles.text}>Like</Text>
          </View>
          <View style={styles.tool}>
            <TouchableOpacity
              onPress={() => {
                this.open();
              }}>
              <Text style={styles.text}>Comment</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tool}>
            <Text style={styles.text}>Share</Text>
          </View>
        </View>
        <Collapsible collapsed={!this.state.comment}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(text) => this.setState({value: text})}
            value={this.state.value}
          />
        </Collapsible>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {},
  toolView: {
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tool: {
    width: '33%',
    height: 30,
    borderRadius: 30,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
