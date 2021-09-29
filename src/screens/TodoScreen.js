import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { AppCard } from '../components/ui/Card';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo && todo.title}</Text>
                <Button title='Ред.' />
            </AppCard>
            <View style={styles.buttons}>
                <Button title='Назад' color={THEME.DANGER_COLOR} onPress={goBack} />
                <Button title='Удалить' color={THEME.GRAY_COLOR} onPress={() => console.log('remove')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
});
  