import React from 'react';
import { View, StyleSheet, Image } from "react-native";

import MapView, { Marker } from 'react-native-maps';

// Components
import SearchInput from '../components/SearchInput';

// Images
import marker from '../assets/marker.png';

const locations = [
    {
        latitude: 37.79,
        longitude: -122.4124,
    },
    {
        latitude: 37.782,
        longitude: -122.45,
    },

    {
        latitude: 37.73,
        longitude: -122.4324,
    },
    {
        latitude: 37.71,
        longitude: -122.4329,
    }
];


const PickupScreen = () => {
    const map = React.useRef();

    React.useEffect(() => {
        map.current.fitToCoordinates(locations, {
            edgePadding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50,
            },
        });

    }, [])

    return <View style={Styles.container}>
        <MapView
            ref={map}
            style={Styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {locations.map((coordinate, index) => (
                <Marker
                    key={`markerId-${index}`}
                    coordinate={coordinate}
                >
                    <Image source={marker} style={Styles.dot} />
                </Marker>
            ))}
        </MapView>
        <View style={Styles.inputContainer}>
            <SearchInput placeholder="Search" />
        </View>
    </View>;
}


const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    },
    inputContainer: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0
    },
    dot: {
        backgroundColor: "#345BE0",
        width: 40,
        height: 40,
        borderRadius: 20
    },
});

export default PickupScreen;
