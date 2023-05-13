import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

//Images
import ad from '../assets/ad.png'

const Ads = () => <View style={Styles.container}>
    <Text style={Styles.label}>Order the J Balvin Meal. Available for a limited time. ¡Lego!</Text>
    <Image source={ad} style={Styles.image} />

</View>;

const Styles = StyleSheet.create({
    container: {
        height: 106,
        backgroundColor: '#F7D449',
        borderRadius: 16,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 106,
        width: 106,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        flex: 1,
        paddingLeft: 12,
    }
});

export default Ads;