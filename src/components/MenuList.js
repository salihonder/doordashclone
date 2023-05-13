import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

// Images
import bigmac from '../assets/bigmac.png';
import fries from '../assets/fries.png';

const data = [
    {
        title: 'French Fries',
        calorie: '(220 Cal.)',
        price: '$1.69',
        image: fries
    },
    {
        title: 'Big Mac Meal',
        calorie: '(560 - 1120 Cal.)',
        price: '$7.89',
        image: bigmac
    },
    {
        title: 'French Fries',
        calorie: '(220 Cal.)',
        price: '$1.69',
        image: fries
    },
    {
        title: 'French Fries',
        calorie: '(220 Cal.)',
        price: '$1.69',
        image: fries
    }
];

const MenuList = () => <View style={Styles.container}>
    <Text style={Styles.title}>Most Popular</Text>
    {data.map((menu, index) => <View style={Styles.wrapper} key={`menu-${index}}`}>
        <View style={Styles.labels}>
            <Text style={Styles.menu}>{menu.title}</Text>
            <Text style={Styles.calorie}>{menu.calorie}</Text>
            <Text style={Styles.price}>{menu.price}</Text>
        </View>
        <Image source={menu.image} style={Styles.image} />
    </View>)}

</View>;

const Styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderColor: '#E7E7E7',
        paddingVertical: 24,
        marginTop: 16,
        paddingLeft: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#E7E7E7',
        paddingVertical: 12,
        alignItems: 'center'
    },
    labels: {},
    menu: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    calorie: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6A6464'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        height: 80,
        width: 80,
        marginRight: 12
    }
});

export default MenuList;