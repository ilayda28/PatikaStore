import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create ({
    container:{
        backgroundColor: '#eceff1',
        borderRadius:10,
        margin:10,
        flex:1,
    },

    Image:{
        height: Dimensions.get( 'window' ).height/4, margin:10,
        borderRadius:10,

    },
    title:{
        fontSize: 18,
        fontWeight:'bold',
        color:'black',
        paddingLeft:10,
        paddingBottom:5,
    },
    price:{
        fontSize:15,
        fontWeight:'bold',
        color:'gray',
        paddingLeft:10,
        paddingBottom:10,
    },
    

})