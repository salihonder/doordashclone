import * as React from 'react';
import { Image, View, Text, Button } from 'react-native';

// Redux
import store from './src/redux/store';
import { Provider } from 'react-redux';

// Screens
import AccountScreen from './src/screens/AccountScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import PickupScreen from './src/screens/PickupScreen';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import BottomSheetScreen from './src/screens/BottomSheetScreen';

// Images
import account from './src/assets/Account.png';
import home from './src/assets/Home.png';
import orders from './src/assets/Orders.png';
import pickup from './src/assets/Pickup.png';
import search from './src/assets/Search.png';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import Header from './src/components/Header';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabScreen() {
  const handleScreenOptions = ({ route }) => ({
    tabBarIcon: ({ size }) => {
      let iconName;

      switch (route.name) {
        case 'Home':
          iconName = home;
          break;
        case 'Pickup':
          iconName = pickup;
          break;
        case 'Search':
          iconName = search;
          break;
        case 'Orders':
          iconName = orders;
          break;
        case 'Account':
          iconName = account;
          break;

      }

      return <Image source={iconName} style={{ height: size, width: size }} />;
    },
    tabBarActiveTintColor: '#D82C2C',
    tabBarInactiveTintColor: '#000000',
  })

  return <Tab.Navigator screenOptions={handleScreenOptions}>
    <Tab.Screen name="Home" component={HomeScreen}
      options={{

        headerTitle: () => <Header />,
        headerTitleAlign: 'center',
        headerStyle: {
          height: 120,
        },
      }}
    />
    <Tab.Screen name="Pickup" component={PickupScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Orders" component={OrdersScreen}
      options={{
        headerTitle: () => <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Orders</Text>,
        headerTitleAlign: 'left',
        headerStyle: {
          height: 100,
        },
      }} />
    <Tab.Screen name="Account" component={AccountScreen}
      options={{

        headerTitle: () => <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Account</Text>,
        headerTitleAlign: 'left',
        headerStyle: {
          height: 100
        },
      }}
    />
  </Tab.Navigator>
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeTabScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name="BottomSheetScreen" component={BottomSheetScreen}
            options={{ headerShown: false, presentation: 'transparentModal', animation: 'slide_from_bottom', }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


