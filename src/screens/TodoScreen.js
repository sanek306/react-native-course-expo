import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo && todo.title}</Text>
            <View style={styles.buttons}>
                <Button title='Назад' color='#757575' onPress={goBack} />
                <Button title='Удалить' color='#e53935' onPress={() => console.log('remove')} />
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
  