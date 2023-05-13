import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

// Components
import RestaurantBG from '../components/RestaurantBG';
import RestaurantHeader from '../components/RestaurantHeader';
import DeliveryInfo from '../components/DeliveryInfo';
import GroupOrder from '../components/GroupOrder';
import Ads from '../components/Ads';
import MenuList from '../components/MenuList';

const RestaurantDetailsScreen = (props) => <View style={Styles.container}>
    <RestaurantBG navigation={props.navigation} />
    <View style={Styles.headerWrapper}>
        <RestaurantHeader />
    </View>
    <ScrollView style={Styles.scrollStyle}>
        <View style={Styles.scrollHeader}>
            <DeliveryInfo />
            <GroupOrder />
            <Ads />
        </View>
        <MenuList />
    </ScrollView>
</View>;

const Styles = StyleSheet.create({
    headerWrapper: {
        position: 'relative',
        top: -230,
        marginHorizontal: 30,
        bottom: 0
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    // scrollContainer: {
    //     flexGrow: 1,
    // },
    scrollStyle: {
        position: 'absolute',
        top: 360,
        left: 0,
        right: 0,
        bottom: 0,
    },
    scrollHeader: {
        marginHorizontal: 30
    }
});

export default RestaurantDetailsScreen;