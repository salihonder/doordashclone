import React from 'react';
import { Text, StyleSheet } from "react-native";

const SubHeader = (props) => <Text style={Styles.title}>{props.titletext}</Text>;

const Styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 8,
        color: 'black'
    }
})
export default SubHeader;