import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import { THEME } from '../../theme';
import { AppTextBold } from './AppTextBold';

export const AppButton = ({ children, onPress, style, color = THEME.MAIN_COLOR }) => {
    
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, ...style, backgroundColor: color}}>
                <AppTextBold style={styles.text}>
                    {children}
                </AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    }
});

