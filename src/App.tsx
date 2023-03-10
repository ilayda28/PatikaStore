import React from "react";
import { Text, View, SafeAreaView, FlatList, StyleSheet, TextInput} from "react-native";
import PatikaStore_data from "./PatikaStore_data.json";
import ProductsCard from "./Components/ProductsCard";

function App () {

return(
  <SafeAreaView style={ styles.container } >
    <View>
    <Text style={styles.header}>PATIKASTORE</Text>
    <TextInput style={styles.searchBar} placeholder= { '   Ara...'}></TextInput>
      <FlatList 
      numColumns = {2}
      data={PatikaStore_data}
      renderItem= {({item}) => <ProductsCard product = {item} /> }
      />
      
    </View>
  </SafeAreaView>

);

}

const styles= StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor: 'white'
  },
  header:{
    fontSize:40,
    color: 'purple',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop:5,
  },
  searchBar:{
    backgroundColor:'#eceff1',
    margin: 10,
    borderRadius:15,

  }
})

export default App