import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Todo = ({ todo }) => {
    return (
        <View style={styles.todo}>
            <Text style={styles.text}>{todo.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
    },
    text: {
        fontSize: 20
    }
});
  