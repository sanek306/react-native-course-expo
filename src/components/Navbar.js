import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import { AppText } from './ui/AppText';

export const Navbar = ({ title }) => {

    return (
        <View style={styles.navbar}>
            <AppText style={styles.text}>{title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1,
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});
  