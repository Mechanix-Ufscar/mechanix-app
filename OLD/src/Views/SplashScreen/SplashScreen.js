import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'

const SplashScreen = props => {
    //State for ActivityIndicator animation
    let [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            //Check if user_id is set or not
            //If not then send for Authentication
            //else send to Home Screen
            AsyncStorage.getItem('user_id').then(value =>
                props.navigation.navigate(
                    value === null ? 'Auth' : 'DrawerNavigationRoutes'
                )
            );
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('./../../../image/aboutreact.png')}
                style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
            />
            <ActivityIndicator
                animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    );
};
export default SplashScreen;
