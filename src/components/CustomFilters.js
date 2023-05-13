import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Pressable } from "react-native";

// Images
import darkstar from '../assets/darkstar.png';
import chevron from '../assets/chevron.png';

// Redux
import { useSelector } from 'react-redux';

// Components
const Item = (props) => (<Pressable style={Styles.container} onPress={() => props.navigation.navigate('BottomSheetScreen')}>
    <Text style={Styles.label}>{props.item.label}</Text>
    <Image source={props.item.icon}
        style={{ height: props.item.h, width: props.item.w, marginLeft: 8 }} />
</Pressable>
);

const data = [
    { label: 'Pickup', icon: null },
    { label: 'Over 4.5', icon: darkstar, h: 12, w: 12 },
    { label: 'Under 30 min', icon: null },
    { label: 'Price', icon: chevron, h: 10, w: 15 },
];

const CustomFilters = (props) => {
    const [filterData, setFilterData] = useState(data);
    const priceFilter = useSelector((state) => state.priceFilter);

    useEffect(() => {
        const newFilterData = [...filterData];
        let label = ""
        label += priceFilter[0] ? "$ " : ""
        label += priceFilter[1] ? "$$ " : ""
        label += priceFilter[2] ? "$$$ " : ""
        label += priceFilter[3] ? "$$$$" : ""

        newFilterData[3].label = label == "" ? "Price" : label;
        setFilterData(newFilterData)
    }, [priceFilter])

    return <View style={Styles.listContainer}>
        <FlatList data={filterData} renderItem={({ item }) => <Item item={item} navigation={props.navigation} />} horizontal
            ItemSeparatorComponent={() => <View style={Styles.itemSpace} />} />
    </View>
};

// Style
const Styles = StyleSheet.create({
    itemSpace: {
        width: 10
    },
    listContainer: {
        marginLeft: 10,
        marginTop: 22
    },
    container: {
        height: 28,
        backgroundColor: '#E7E7E7',
        borderRadius: 20,
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row'
    },
    label: {
        color: 'black'
    }
});

export default CustomFilters;
