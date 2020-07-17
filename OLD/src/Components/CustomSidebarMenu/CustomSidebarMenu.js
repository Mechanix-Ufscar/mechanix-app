import React from 'react';
import { View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'

const CustomSidebarMenu = props => {
    let items = [
        {
            navOptionName: 'Home Screen',
            screenToNavigate: 'HomeScreen',
        },
        {
            navOptionName: 'Setting Screen',
            screenToNavigate: 'SettingsScreen',
        },
        {
            navOptionName: 'Logout',
            screenToNavigate: 'logout',
        },
    ];

    const handleClick = (index, screenToNavigate) => {
        if (screenToNavigate == 'logout') {
            props.navigation.toggleDrawer();
            Alert.alert(
                'Logout',
                'Are you sure? You want to logout?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            return null;
                        },
                    },
                    {
                        text: 'Confirm',
                        onPress: () => {
                            AsyncStorage.clear();
                            props.navigation.navigate('Auth');
                            console.log('logout');
                        },
                    },
                ],
                { cancelable: false }
            );
        } else {
            props.navigation.toggleDrawer();
            global.currentScreenIndex = screenToNavigate;
            props.navigation.navigate(screenToNavigate);
        }
    };
    return (
        <View style={styles.sideMenuContainer}>
            <View style={styles.profileHeader}>
                <View style={styles.profileHeaderPicCircle}>
                    <Text style={{ fontSize: 25, color: '#307ecc' }}>
                        {'About React'.charAt(0)}
                    </Text>
                </View>
                <Text style={styles.profileHeaderText}>AboutReact</Text>
            </View>
            <View style={styles.profileHeaderLine} />
            <View style={{ width: '100%', flex: 1 }}>
                {items.map((item, key) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 20,
                            color: 'white',
                            backgroundColor:
                                global.currentScreenIndex === item.screenToNavigate
                                    ? '#4b9ff2'
                                    : '#307ecc',
                        }}
                        key={key}
                        onStartShouldSetResponder={() =>
                            handleClick(key, item.screenToNavigate)
                        }>
                        <Text style={{ fontSize: 15, color: 'white' }}>
                            {item.navOptionName}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};


export default CustomSidebarMenu;
