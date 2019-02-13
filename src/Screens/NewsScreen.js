import React from 'react'
import { StyleSheet, View, FlatList, TextInput,Image, Text,TouchableOpacity } from 'react-native'
import donnees from './donnees'
import {Icon} from 'native-base'



export default class NewsScreen extends React.Component {

constructor (props){
  super(props)
  this.state={
    rech : '',
    data:donnees,

  }
}

static navigationOptions =  ({navigation}) => {
        return {
            headerLeft: <Icon 
                          name='ios-menu' 
                          style={{ color:'#fff', fontSize:30, paddingLeft:20 }}
                          onPress={() =>navigation.toggleDrawer()}
                        />,
           
        }
    };






  afficheDetailNews = (id,titre, img,detail, date) => {


    this.props.navigation.navigate('DetailNewsScreen', {id, titre, img, detail,date})

 }
CustomiseArticle = (item)=>{


    var img=item.icon
    return(
     <View>

      <TouchableOpacity style={styles.container} onPress={() => this.afficheDetailNews(item.id, item.title, img, item.detail,item.date)}>

          <Image
             style={styles.image}
             source={img}
           />
           <View style={styles.principale}>
           <View style={styles.entete}>
                <Text style={styles.titre_text}> {item.title} </Text>
            </View>
            <View style={styles.detail_container}>
                  <Text style={styles.detail_text} numberOfLines={6}> {item.detail} </Text>
            </View>
            <View style={styles.type_container}>
            <Text style={styles.type_text}> {item.date} </Text>
          </View>
        </View>
         </TouchableOpacity>
     </View>);
}

// componenntDidMount(){
//   cost url='http://'
//   fetch(url)
//   .then((response)=> response.json())
//   .then((responseJson)=>{
//     this.setState({
//       data:responseJson.article
//     })

//   })
//   .catch(error)=>{
//     console.log(error)

//   }

// }



  render() {
    return (
      <View style={styles.main_container}>
        <View>
               <FlatList
                  data={this.state.data}
                  renderItem={({item}) => this.CustomiseArticle(item)}
                  keyExtractor={(item) => item.id.toString()}
                />
         </View>
     </View>




    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal:5
  },
   container: {
    height: 190,
    flexDirection: 'row',
  },

  image: {
    width: 150,
    height: 150,
    margin: 5,
    // backgroundColor: 'gray'
  },
  principale: {
    flex: 1,
    margin: 5
  },
  entete: {
    flex: 3,
    flexDirection: 'row'
  },
 titre_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap',
    paddingRight: 5
  },

  detail_container: {
    flex: 7
  },
  detail_text: {
    fontStyle: 'italic',
     fontWeight: 'bold',
    color: '#666666'
  },
  type_text: {
    textAlign: 'right',
    fontSize: 14
  }
})
