import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

//Images
import group from '../assets/group.png';

const GroupOrder = () => <View style={Styles.container}>
    <Image source={group} style={Styles.image} />
    <Text>Group Order</Text>
</View>;


const Styles = StyleSheet.create({
    container: {
        borderRadius: 32,
        borderColor: '#E7E7E7',
        borderWidth: 2,
        height: 40,
        marginTop: 16,
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 31,
        height: 23,
        marginRight: 6
    },
    label: {
        fontSize: 18,
        color: 'black',
    }
});

export default GroupOrder;