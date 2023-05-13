import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";

// Screens
import ListRestaurants from '../components/ListRestaurants';

// Components
import SearchInput from '../components/SearchInput';

const SearchScreen = () => {
    const [searchWord, setSearchWord] = useState("");


    return <View style={[Styles.container, { backgroundColor: searchWord.length > 0 ? 'white' : '#E7E7E7' }]}>
        <View style={Styles.inputContainer}>
            <SearchInput
                placeholder="Search for stores"
                value={searchWord}
                setValue={setSearchWord}
                bgcolor={searchWord.length > 0 ? '#E7E7E7' : 'white'}
            />
        </View>
        <ListRestaurants searchWord={searchWord} />
    </View>
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7'
    },
    inputContainer: {
        marginTop: 30
    }
});

export default SearchScreen;