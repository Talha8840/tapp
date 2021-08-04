/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import SCREENS from './SCREENS';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Products from './screens/Products';
import About from './screens/About';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
    return (
        <Tab.Navigator
            activeColor="#21ABCD"
            inactiveColor="#fff"
            style={styles.bgColor}
            barStyle={styles.barStyle}>
            <Tab.Screen
                name={SCREENS.HOME}
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-outline" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'sdds'}
                component={Home}
                options={{
                    tabBarLabel: 'ssdd',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-outline" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.PRODUCTS}
                component={Products}
                options={{
                    tabBarLabel: 'Products',
                    tabBarIcon: ({ color }) => (
                        <Icon name="account-multiple-outline" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.ABOUT}
                component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color }) => <Icon name="cart" color={color} size={25} />,
                }}
            />


        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    barStyle: {
        paddingVertical: 10,
        backgroundColor: 'lightgray',
        borderWidth: 0.5,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: 'transparent',
        overflow: 'hidden',
    },
    bgColor: {
        backgroundColor: 'black',
    },
});
