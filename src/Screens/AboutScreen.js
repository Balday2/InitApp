/**
 * L'ecran de contact
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base'

type Props = {};
export default class App extends Component<Props> {
  //la Methode pour le Menu au click du bouton menu
 OpenMenu = (navigation) =>{
   this.props.navigation.openDrawer();
 }

render() {
    return (
      <View >
        <TouchableOpacity onPress={() => this.OpenMenu(this.props.navigation)} style={{padding:10}}>
           <Icon name='ios-menu' style={styles.image} />
        </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.About}> Les info sur la radio</Text>
       </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5CFFF',
  },
  About: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image:{
    marginTop:20,
    paddingLeft:10,
    width: 35,
    height: 35,
    color: '#000',
    fontSize: 30

  }
});
