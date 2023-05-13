import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Images
import doordashlogo from '../assets/doordashlogo.png';
import darkstar from '../assets/darkstar.png';


const RestaurantHeader = () => <View>
    <Text style={Styles.title}>McDonald’s</Text>
    <View style={Styles.subheaderWrapper}>
        <Image source={doordashlogo} style={Styles.logo} />
        <Text style={[Styles.subheader, Styles.dashpass]}>DashPass</Text>
        <Text style={Styles.subheader}>Fast Food Burgers</Text>
    </View>
    <View style={Styles.subheaderWrapper}>
        <Text style={Styles.subheader}>4.5</Text>
        <Image source={darkstar} style={Styles.rating} />
        <Text style={Styles.subheader}>920+ ratings 0.9 mi $</Text>
    </View>
</View>;

// Style
const Styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },
    subheaderWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subheader: {
        fontSize: 14,
        color: '#6A6464',
        marginLeft: 2,
        marginRight: 2
    },
    logo: {
        height: 18,
        width: 24
    },
    dashpass: {
        color: '#378778'
    },
    rating: {
        height: 12,
        width: 12
    }
});
export default RestaurantHeader;