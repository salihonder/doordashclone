import React from "react";
import { StyleSheet, Image } from "react-native";

// Images
import mclogo from '../assets/mclogo.png';

const RestaurantLogo = () => <Image source={mclogo} style={Styles.logo} />

const Styles = StyleSheet.create({
    logo: {
        height: 78,
        width: 78,
        position: 'relative',
        top: -248,
        left: 20,
    }
})
export default RestaurantLogo;