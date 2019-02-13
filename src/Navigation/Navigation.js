import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator, DrawerItems}   from 'react-navigation'
import {StyleSheet, Dimensions, View, Image} from 'react-native'
import DetailNewsScreen from '../Screens/DetailNewsScreen'
import NewsScreen from '../Screens/NewsScreen'
import RadioScreen from '../Screens/RadioScreen'
import AboutScreen from '../Screens/AboutScreen'
import {Icon} from 'native-base'
import React from 'react'


/**
  * @const sizeHeight : recupere la hauteur de l'écran
  * @const sizeWidth : recupere la largeur de l'écran
**/
  const sizeHeight = Dimensions.get('window').height
  const sizeWidth = Dimensions.get('window').width



//la navigation entre l'ecran NewsScreen et DetailNewsScreen
const StackNavigation = createStackNavigator({
    NewsScreen:{screen:NewsScreen,
        navigationOptions: {

            headerStyle: {
                backgroundColor: '#880E4F',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                marginLeft: 60,

              },

           }


        },

        RadioScreen:{screen:RadioScreen,
        navigationOptions: {

            headerStyle: {
                backgroundColor: '#880E4F',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                marginLeft: 60,

              },

           }


        },

     DetailNewsScreen: {screen:DetailNewsScreen,
            navigationOptions: {

                headerStyle: {

                    backgroundColor: '#880E4F',
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold',

                  },

               }
        }



  });
//la navigation entre l'ecran Radio et DetailNewsScreen


const tabNavigation=createBottomTabNavigator({
     RADIO:{screen:RadioScreen,
      navigationOptions:{
       tabBarLabel: 'Radio',
       tabBarIcon: ({tintColor}) =>(
         <Icon name="md-radio" style={{ color: tintColor, fontSize:20 }}/>
       )
     }
     },
     NEWS:{screen:StackNavigation,
       navigationOptions:{
       tabBarLabel: 'News',
       tabBarIcon: ({tintColor}) =>(
         <Icon name="book" style={{ color: tintColor, fontSize:20 }}/>
       )
     }
     }

    },
    {tabBarOptions:{
        activeBackgroundColor: '#81D4FA',
        inactiveBackgroundColor: '#FFFFFF',
        showLabel:true,
        showIcon:true,
    tabStyle:{
        backgroundColor: '#880E4F',
      }
    }},
);


const drawerCustom = (props) => {
   return(
     <View>
       <Image source={require('../../assets/icon.png')} style={styles.DrawerImage}/>
       <DrawerItems {...props} />
     </View>

   )
}

/**
  * les composants dans sidemenu
 **/
const Navigation = createDrawerNavigator({
  Accueil: {
    screen: tabNavigation,
      navigationOptions: () => ({
      drawerIcon: ({tintColor}) =>{
        return(
          <Icon name='ios-home' color='#000' size={20}/>
        )
      }
  })
  },

  Contact: {
    screen: AboutScreen,
      navigationOptions: () => ({
      drawerIcon: ({tintColor}) =>{
        return(
          <Icon name='ios-contact' color='#000' size={20}/>
        )
      }
  })
  },

},
{
  // drawerBackgroundColor: '#fff',
    contentComponent: drawerCustom,
    // drawerPosition: 'left',
});


/**
  *style de l'image au niveau de sidemenu
**/
const styles = StyleSheet.create({
  DrawerImage:{
    height: sizeHeight / 3,
    width: sizeWidth /1.5,
    alignSelf: 'center',
   }
})

 export default Navigation
