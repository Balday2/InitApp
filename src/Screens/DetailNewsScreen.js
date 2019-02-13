
import React from 'react'
import { View, Button,StyleSheet,Image, Dimensions, Text,ScrollView} from 'react-native'


export default class DetailNewsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const titre = navigation.getParam('titre');
    const img = navigation.getParam('img');
    const detail = navigation.getParam('detail');
    const date = navigation.getParam('date');


    return (
        <ScrollView style={{ flex:1 }}>
             <Text style={styles.titre}> {titre}</Text>

            <View>
                  <Image style={styles.image} source={img} />
            </View>
            <View>
                <Text style={styles.date} > Publié Le {date} </Text>
           </View>
           <View>
                <Text style={styles.detail} >  {detail} </Text>
           </View>
        </ScrollView>
    )
  }
}





styles= StyleSheet.create({

    image: {

        width: Dimensions.get('window').width,

        height: 300,
      },
      
     titre: {
         fontSize: 40,
         fontWeight: 'bold',
         textAlign:'center',
         textDecorationLine:'underline'
     },
     detail:{
         fontSize: 20,
         fontWeight: 'bold',
         padding:10,
     },
     date:{
         fontSize: 20,
         fontWeight: 'bold',
         textAlign:'center',
     },

})
