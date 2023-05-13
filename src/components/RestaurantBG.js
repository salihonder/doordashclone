import React from "react";
import { ImageBackground, View, StyleSheet, Image, Dimensions, Pressable } from "react-native";

// Images
import restaurantBG from '../assets/restaurantBG.png';
import leftArrow from '../assets/leftArrow.png';

// Components
import RestaurantLogo from "./RestaurantLogo";

const windowWidth = Dimensions.get('window').width;

const RestaurantBG = (props) => <View>
    <ImageBackground source={restaurantBG} style={Styles.image} />
    <Pressable style={Styles.backArrowWrapper} onPress={() => props.navigation.goBack()}>
        <Image source={leftArrow} style={Styles.backArrowImage} />
    </Pressable>
    <View style={Styles.triangle} />
    <RestaurantLogo />
</View>;

const Styles = StyleSheet.create({
    image: {
        height: 318,
    },
    backArrowWrapper: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: 'white',
        position: 'absolute',
        top: 60,
        left: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backArrowImage: {
        height: 14,
        width: 17
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: windowWidth,
        borderBottomWidth: 110,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderLeftColor: 'transparent',
        position: 'relative',
        top: -110
    }
})

export default RestaurantBG;