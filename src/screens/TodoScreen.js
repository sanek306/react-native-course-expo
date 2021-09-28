import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo && todo.title}</Text>
            <View style={styles.buttons}>
                <Button title='Назад' color={THEME.DANGER_COLOR} onPress={goBack} />
                <Button title='Удалить' color={THEME.GRAY_COLOR} onPress={() => console.log('remove')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
});
  