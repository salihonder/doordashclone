import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

// Images
import chevronright from '../assets/chevronright.png';

// Components
const Item = (props) => <View style={[Styles.itemContainer, props.item.name == "Log Out" && Styles.noborder]}>
    <View style={Styles.titleWrapper}>
        <View style={[Styles.descriptionWrapper, !props.item.description && Styles.nodescription]}>
            <Text style={Styles.itemname}>{props.item.name}</Text>
            {props.item.description && <Text style={Styles.itemdescription}>{props.item.description}</Text>}
        </View>
        <Image source={chevronright} style={Styles.image} />
    </View>
</View>;

const settingsdata = [
    {
        name: 'Manage Account',
        description: 'Update information and manage your account'
    },
    {
        name: 'Address',
        description: 'Add or remove delivery address'
    },
    {
        name: 'Privacy',
        description: 'Learn about Privacy and manage settings'
    },
    {
        name: 'Notifications',
        description: 'Manage delivery and promotional notifications'
    },
    {
        name: 'Log Out',
    },
];

const moredata = [
    { name: 'Become a Dasher' },
    { name: 'Become a Partner Restaurant' },
    { name: 'Legal' }
]

const AccountScreen = () => <ScrollView style={Styles.container}>

    <Text style={Styles.title}>Account Settings</Text>
    {settingsdata.map(item => <Item key={`key-${item.name}`} item={item} />)}

    <View style={Styles.separator} />

    <Text style={Styles.title}>More</Text>
    {moredata.map(item => <Item key={`key-${item.name}`} item={item} />)}

    <Text style={Styles.version}>Version 4.112.2 (113241)</Text>
</ScrollView>;

// Style
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemname: {
        fontSize: 18,

    },
    itemdescription: {
        fontSize: 12,
        color: '#6A6464',
        marginTop: 9
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 16
    },
    image: {
        height: 12,
        width: 8,
        marginRight: 32
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    separator: {
        height: 15,
        backgroundColor: '#E7E7E7',
        width: '100%'
    },
    itemContainer: {
        marginLeft: 18,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E7E7E7',
    },
    descriptionWrapper: {
        alignContent: 'center',
    },
    nodescription: {
        paddingVertical: 10
    },
    noborder: {
        borderBottomWidth: 0
    },
    version: {
        fontSize: 14,
        color: '#6A6464',
        marginTop: 50,
        textAlign: 'center'
    }
});

export default AccountScreen;