import React from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native/types";
import PatikaStore_data from "./PatikaStore_data.json";

function App () {
return(
  <SafeAreaView>
    <View>

      <FlatList
      data={[]}
      renderItem= {({item}) => <Text> {item}</Text>}
      
      />

    </View>
  </SafeAreaView>

);

}

export default App