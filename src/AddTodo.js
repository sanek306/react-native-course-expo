import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = () => {

    return (
        <View style={styles.block}>
            <TextInput style={styles.input} />
            <Button title="Добавить" />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "70%",
        padding: 10,
        borderBottomColor: "#3949ab",
        borderStyle: "solid",
        borderBottomWidth: 2,
        fontSize: 19,
    }
});
  