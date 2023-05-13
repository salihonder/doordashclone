import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DeliveryInfo = () => <View style={Styles.container}>
    <View style={Styles.wrapper}>
        <Text style={Styles.header}>1.99$</Text>
        <Text style={Styles.label}>Delivery Fee</Text>
    </View>
    <View style={Styles.line}></View>
    <View style={Styles.wrapper}>
        <Text style={Styles.header}>23 min</Text>
        <Text style={Styles.label}>Delivery Time</Text>
    </View>
</View>;

const Styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderColor: '#E7E7E7',
        borderWidth: 2,
        height: 88,
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        width: 2,
        height: 38,
        backgroundColor: '#E7E7E7'
    },
    wrapper: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    label: {
        fontSize: 18,
        color: '#424242'
    }

});
export default DeliveryInfo;