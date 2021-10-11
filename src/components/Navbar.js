import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';
import { AppText } from './ui/AppText';

export const Navbar = ({ title }) => {

    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.navbarIOS,
            android: styles.navbarAndroid,
        })}}>
            <AppText style={styles.text}>{title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIOS: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : 'white',
        fontSize: 20
    }
});
  