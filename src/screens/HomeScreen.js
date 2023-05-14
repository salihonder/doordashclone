import React from 'react';
import { StyleSheet, ScrollView, View } from "react-native";

// Screens
import CuisineFilters from '../components/CuisineFilters';
import CustomFilters from '../components/CustomFilters';

// Components
import SubHeader from '../components/SubHeader';
import RestaurantList from '../components/RestaurantList';

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from '../redux/action';

const HomeScreen = (props) => {
    const restaurants = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchRestaurants())
    }, [])

    return <ScrollView style={Styles.container}>
        <CuisineFilters />
        <CustomFilters navigation={props.navigation} />
        <SubHeader titletext="Fastest Near You" />
        <RestaurantList navigation={props.navigation} data={restaurants} />
        <View style={Styles.space} />
        <SubHeader titletext="Top Rated for You" />
        <RestaurantList navigation={props.navigation} data={restaurants} />
    </ScrollView>
};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    space: {
        height: 15,
        backgroundColor: '#E7E7E7'
    }
});

export default HomeScreen;