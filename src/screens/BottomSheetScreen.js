import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updatePriceFilter } from '../redux/action';

const PriceButton = (props) => <Pressable
    onPress={props.onPress}
    style={[Styles.pricebutton, !props.selected && Styles.pricebuttonNot]}>
    <Text style={[Styles.pricebuttontext, !props.selected && Styles.pricebuttontextNot]}>{props.value}</Text>
</Pressable>

const ActionButton = (props) => <Pressable
    onPress={props.onPress}
    style={[Styles.actionbutton, props.value == 'Reset' && Styles.actionresetbutton]}>
    <Text style={[Styles.actionbuttontext, props.value == 'Reset' && Styles.actionresetbuttontext]}>{props.value}</Text>
</Pressable>

const BottomSheetScreen = (props) => {

    const [priceFilter$, setPriceFilter$] = useState(false);
    const [priceFilter$$, setPriceFilter$$] = useState(false);
    const [priceFilter$$$, setPriceFilter$$$] = useState(false);
    const [priceFilter$$$$, setPriceFilter$$$$] = useState(false);

    const dispatch = useDispatch();

    const priceFilter = useSelector((state) => state.priceFilter);

    useEffect(() => {
        setPriceFilter$(priceFilter[0]);
        setPriceFilter$$(priceFilter[1]);
        setPriceFilter$$$(priceFilter[2]);
        setPriceFilter$$$$(priceFilter[3]);
    }, [])

    return <Pressable
        style={Styles.container}
        onPress={() => props.navigation.goBack()}>
        <View style={Styles.bottomsheet}>
            <View style={Styles.line} />
            <Text style={Styles.title}>Price</Text>
            <View style={Styles.pricebuttoncontainer} >
                <PriceButton value="$" selected={priceFilter$} onPress={() => setPriceFilter$(!priceFilter$)} />
                <PriceButton value="$$" selected={priceFilter$$} onPress={() => setPriceFilter$$(!priceFilter$$)} />
                <PriceButton value="$$$" selected={priceFilter$$$} onPress={() => setPriceFilter$$$(!priceFilter$$$)} />
                <PriceButton value="$$$$" selected={priceFilter$$$$} onPress={() => setPriceFilter$$$$(!priceFilter$$$$)} />
            </View>
            <ActionButton value="View Results" onPress={() => {
                dispatch(updatePriceFilter({ index: 0, value: priceFilter$ }));
                dispatch(updatePriceFilter({ index: 1, value: priceFilter$$ }));
                dispatch(updatePriceFilter({ index: 2, value: priceFilter$$$ }));
                dispatch(updatePriceFilter({ index: 3, value: priceFilter$$$$ }));
                props.navigation.goBack();
            }} />
            <ActionButton value="Reset" onPress={() => {
                dispatch(updatePriceFilter({ index: 0, value: false }));
                dispatch(updatePriceFilter({ index: 1, value: false }));
                dispatch(updatePriceFilter({ index: 2, value: false }));
                dispatch(updatePriceFilter({ index: 3, value: false }));
                props.navigation.goBack();
            }} />
        </View>
    </Pressable>
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.43)'
    },
    bottomsheet: {
        backgroundColor: 'white',
        height: 330,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 24
    },
    line: {
        width: 80,
        height: 8,
        backgroundColor: '#E7E7E7',
        borderRadius: 20,
        marginTop: 16,
        alignSelf: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 32,
    },
    pricebutton: {
        backgroundColor: 'black',
        borderRadius: 20,
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4
    },
    pricebuttontext: {
        color: 'white',
        fontSize: 16
    },
    pricebuttoncontainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32
    },
    pricebuttonNot: {
        backgroundColor: '#E7E7E7',
    },
    pricebuttontextNot: {
        color: 'black'
    },
    actionbutton: {
        height: 50,
        backgroundColor: '#D82C2C',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },
    actionbuttontext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    actionresetbutton: {
        backgroundColor: 'white'
    },
    actionresetbuttontext: {
        color: 'black'
    }
})
export default BottomSheetScreen;