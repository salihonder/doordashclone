import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

// Images
import search from '../assets/Search.png';

const SearchInput = (props) => <View style={[Styles.container, { backgroundColor: props.bgcolor || 'white' }]}>
    <Image source={search} style={Styles.image} />
    <TextInput
        value={props.value}
        onChangeText={props.setValue}
        style={Styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={'#8B8B8B'} />
</View>;

const Styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    image: {
        height: 22,
        width: 22,
        marginRight: 12
    },
    input: {
        fontSize: 21
    }
})
export default SearchInput;