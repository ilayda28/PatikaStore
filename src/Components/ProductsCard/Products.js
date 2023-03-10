import React from "react";
import { Text, View, Image } from "react-native";
import styles from './Products.style'

const product = ({product}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.Image} source={{ uri: product.imgURL}}/>
            <Text style={styles.title}> { product.title } </Text>
            <Text style={styles.price}> { product.price }</Text>
            <Text style={styles.inStock}>{ product.inStock ? '': 'STOKTA YOK'}</Text>
        </View>
    )

}


export default product;