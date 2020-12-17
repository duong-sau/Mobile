import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Main from '../Srceen/Main/Main';
import User from '../Srceen/User/User';
import LoginForm from './MyTabBar/LoginForm';

function UserImage() {
  if (global.logIn) {
    return (
      <View>
        <Image
          style={styles.naviImage}
          source={{
            uri: global.userImage,
          }}
        />
        <View style={{width: 160, marginLeft: 50}} />
      </View>
    );
  } else {
    return (
      <View>
        <LoginForm />
        <View style={{width: 160, marginLeft: 50}} />
      </View>
    );
  }
}
function log() {
  if (global.logIn) {
    return (
      <View style={styles.naviView}>
        <View style={styles.naviItem}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 25}}>
              <Text style={styles.naviText}>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.naviView}>
        <View style={styles.naviItem}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 25}}>
              <Text style={styles.naviText}>Log in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={() => UserImage()}
        style={{
          height: 200,
          width: 500,
          marginTop: -50,
          marginLeft: 0,
          backgroundColor: 'rgb(66,103,178)',
        }}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <View style={styles.naviView}>
        <View style={styles.naviItem}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 25}}>
              <Text style={styles.naviText}>About us</Text>
            </View>
          </TouchableOpacity>
        </View>
        {log()}
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
export default class NaviBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Logout" component={User} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  naviImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginLeft: 90,
    marginTop: 50,
  },
  naviItem: {
    height: 80,
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderColor: 'white',
    backgroundColor: 'rgb(66,103,178)',
  },
  naviText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 17,
    marginTop: 0,
  },
  naviView: {
    backgroundColor: 'rgb(66,103,178)',
    marginTop: -10,
    height: 800,
  },
});
