import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../styles/colors';
import { Home } from '../pages/Home';
import { MaterialIcons } from '@expo/vector-icons';

import { Platform } from 'react-native';
import { Activity } from '../pages/Activity';
import { Store } from '../pages/Store';
import { Class } from '../pages/Class';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.button,
                inactiveTintColor: colors.text_light,
                labelPosition: 'upside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88
                },

            }}>
            <AppTab.Screen
                name="Activity"
                component={Activity}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <AppTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="Store"
                component={Store}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons

                            name="store"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="Class"
                component={Class}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="school"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;