import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

import chevron from '../assets/chevron.png';

const Header = () => <View style={Styles.container}>
    <Text style={Styles.delivering}>DELIVERING TO</Text>
    <View style={Styles.addressWrapper}>
        <Text style={Styles.address}>12910 Calderdale Ave</Text>
        <Image source={chevron} style={Styles.chevron} />
    </View>
</View>;

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    delivering: {
        fontWeight: 'bold',
        color: '#D82C2C',
        fontSize: 14
    },
    address: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 21,
        marginTop: 4
    },
    addressWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    chevron: {
        width: 15,
        height: 10,
        marginLeft: 4,
        marginTop: 6
    }
});

export default Header;

