import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from "react-native";

// Images
import chevronright from '../assets/chevronright.png';

// Components
const Item = (props) => <View style={Styles.itemContainer}>
    <View style={Styles.titleWrapper}>
        <Text style={Styles.itemname}>{props.item.name}</Text>
        <Image source={chevronright} style={Styles.image} />
    </View>

    <Text style={Styles.line1}>{`${props.item.date} · $${props.item.price} · ${props.item.items.length} items`}</Text>
    <Text style={Styles.line2}>{props.item.items.join(' · ')}</Text>
    <View style={Styles.buttonWrapper}>
        <Pressable style={Styles.button}>
            <Text style={Styles.buttonText}>Reorder</Text>
        </Pressable>
        <Pressable style={Styles.button}>
            <Text style={Styles.buttonText}>View Receipt</Text>
        </Pressable>
    </View>
</View>;

const OrdersScreen = () => <View style={Styles.container}>

    <FlatList
        data={[
            {
                name: 'Chili’s Grill & Bar',
                date: 'Tuesday, Mar 28',
                price: 44.99,
                items: ['Skillet Chocolate Chip Cookie', 'Cheesecake', 'Molten Chocolate Cake']
            },
            {
                name: 'Chili’s Grill & Bar',
                date: 'Tuesday, Mar 28',
                price: 44.99,
                items: ['Skillet Chocolate Chip Cookie', 'Cheesecake', 'Molten Chocolate Cake']
            },
            {
                name: 'Chili’s Grill & Bar',
                date: 'Tuesday, Mar 28',
                price: 44.99,
                items: ['Skillet Chocolate Chip Cookie', 'Cheesecake', 'Molten Chocolate Cake']
            },
            {
                name: 'Chili’s Grill & Bar',
                date: 'Tuesday, Mar 28',
                price: 44.99,
                items: ['Skillet Chocolate Chip Cookie', 'Cheesecake', 'Molten Chocolate Cake']
            },
            {
                name: 'Chili’s Grill & Bar',
                date: 'Tuesday, Mar 28',
                price: 44.99,
                items: ['Skillet Chocolate Chip Cookie', 'Cheesecake', 'Molten Chocolate Cake']
            },
        ]}
        renderItem={Item}
        ListHeaderComponent={() => <Text style={Styles.title}>Completed</Text>}
        ItemSeparatorComponent={() => <View style={Styles.separator} />}
    />
</View>;

// Style
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemname: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 14,
        marginBottom: 28,
        marginLeft: 16
    },
    image: {
        height: 12,
        width: 8
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E7E7E7',
        paddingBottom: 12
    },
    line1: {
        fontSize: 14,
        color: '#6A6464',
        marginTop: 10,
        marginBottom: 4
    },
    line2: {
        fontSize: 14,
        color: 'black',
        marginBottom: 20,
    },
    button: {
        height: 28,
        backgroundColor: '#E7E7E7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        paddingVertical: 6,
        paddingHorizontal: 16
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    separator: {
        height: 15,
        backgroundColor: '#E7E7E7'
    },
    itemContainer: {
        paddingHorizontal: 18,
        paddingVertical: 10
    }
});

export default OrdersScreen;