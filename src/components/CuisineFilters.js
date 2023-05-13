import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// Images
import asian from '../assets/asian.png';
import burgers from '../assets/burgers.png';
import chicken from '../assets/chicken.png';
import fastfood from '../assets/fastfood.png';
import convenience from '../assets/convenience.png';

// Components
const Item = (props) => <View>
    <Image source={props.item.image} style={Styles.item} />
    <Text style={Styles.label}>{props.item.label}</Text>
</View>;

const data = [
    { image: asian, label: 'Asian' },
    { image: burgers, label: 'Burgers' },
    { image: chicken, label: 'Chicken' },
    { image: fastfood, label: 'Fast Food' },
    { image: convenience, label: 'Convenience' },
];

const CuisineFilters = () => <View>
    <FlatList data={data} renderItem={Item} horizontal />
</View>;

// Style
const Styles = StyleSheet.create({
    item: {
        height: 80,
        width: 80,
    },
    label: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center'
    }
});

export default CuisineFilters;