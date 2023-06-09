import React from 'react';
import { View, StyleSheet, Image, FlatList, Text, Pressable } from "react-native";

// Images
import heart from '../assets/heart.png';
import restaurant from '../assets/restaurant.png';
import lightstar from '../assets/lightstar.png';

// Components
const Item = (props) => (
    <Pressable onPress={() => props.navigation.navigate('RestaurantDetails')}>
        <Image source={props.item.image} style={Styles.image} />
        <View style={Styles.header}>
            <Text style={Styles.headerTitle}>{props.item.title}</Text>
            <Image source={heart} style={Styles.headerHeart} />
        </View>
        <View style={Styles.subheader}>
            <Text style={Styles.subheaderText}>
                {`${props.item.distance} mi ${props.item.duration} min $${props.item.minTotalFees} total fees`}
            </Text>
            <View style={Styles.subheaderWrapper}>
                <Text style={Styles.subheaderText}>{`${props.item.rate}`}</Text>
                <Image source={lightstar} style={Styles.ratingstar} />
                <Text style={Styles.subheaderText}>{`(${props.item.totalRateNumber}+)`}</Text>
            </View>
        </View>
    </Pressable>
);

const data = [
    {
        image: restaurant,
        title: `McDonald’s`,
        distance: 1.1,
        duration: 20,
        rate: 4.5,
        totalRateNumber: 9700,
        minTotalFees: 0
    },
    {
        image: restaurant,
        title: `Jack in the Box`,
        distance: 2.7,
        duration: 35,
        rate: 4.4,
        totalRateNumber: 2400,
        minTotalFees: 3.99
    },
    {
        image: restaurant,
        title: `Mei'Mei's Kitchen`,
        distance: 4.4,
        duration: 40,
        rate: 4.5,
        totalRateNumber: 960,
        minTotalFees: 5.99
    },
    {
        image: restaurant,
        title: `Bamboo Bistro`,
        distance: 4.4,
        duration: 35,
        rate: 4.6,
        totalRateNumber: 7900,
        minTotalFees: 5.99
    },
];

const RestaurantList = (props) => <View style={Styles.container}>
    <FlatList data={data}
        renderItem={({ item }) => <Item item={item} navigation={props.navigation} />}
        horizontal
        ItemSeparatorComponent={() => <View style={Styles.separator} />} />
</View>;

// Style
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 160,
        width: 284,
        borderRadius: 4
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black'
    },
    headerHeart: {
        height: 20,
        width: 20
    },
    subheader: {
        marginTop: 6
    },
    subheaderText: {
        fontSize: 14,
        color: '#6A6464'
    },
    subheaderWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingstar: {
        height: 12,
        width: 12,
        marginLeft: 2,
        marginRight: 2
    },
    separator: {
        width: 20
    }
});

export default RestaurantList;