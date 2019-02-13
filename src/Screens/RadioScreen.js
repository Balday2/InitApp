/**
 * L'ecran pour la radio
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base'


export default class RadioScreen extends Component{

 // constructeur
  constructor(props){
    super(props)
    this.state={
        IsPlaying: false,
    }
}

// la fonction qui sera executer lors  du montage de l'app
//et c'est ici on va initialiser la variable qui recupère le stream
 async componentWillMount(){
    try{

    } catch(error) {console.log(error);}
  }


 // la fonction qui s'execute lorsqu'on sur appuis pause ou play
    JouerOuPause = () => {
    if(this.state.IsPlaying == false){

        try {
     //jouer le son


          this.setState({IsPlaying: true})
        } catch (error) {


        }

      }else{
          //mettre stop

        this.setState({IsPlaying: false})
      }
 }

/**
  * @func togglePlay une fonction verifiant 
  * si la lecture est en cours ou sinon,
  * pour retourner le nom de l'icon: play ou pause
 **/
 togglePlay(){
       return this.state.playBtn == true ? 'play':'pause'
  }
 //la Methode pour le Menu au click du bouton menu
 OpenMenu = (navigation) =>{
   this.props.navigation.openDrawer();
 }


  render() {
    return (
       <ImageBackground style={{flex:1}} source={require('../../assets/bg.png')}>
      <View style={{flex:1}} >

      <TouchableOpacity onPress={() => this.OpenMenu(this.props.navigation)} style={{padding:10}}>
            <Icon name='ios-menu' style={styles.image} />
      </TouchableOpacity>
       <View style={{flex:1}}>
          <View style={{flex:1}} ></View>
              <TouchableOpacity style={styles.touchable} onPress={this.JouerOuPause}>
               <Image  source={ this.state.IsPlaying ==false ? require('../../assets/play.png') : require('../../assets/pause.png')} />
              </TouchableOpacity>

           </View>
      </View>
       </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  touchable:{
    justifyContent:'flex-end',
    alignItems: 'center',
    paddingBottom:10,
  },
    image:{
    marginTop:20,
    paddingLeft:10,
    width: 35,
    height: 35,
    color: '#fff',
    fontSize: 30
  }
});
