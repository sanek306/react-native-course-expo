import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            //error
        }

    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела..."
            />
            <Button 
                title="Добавить"
                onPress={pressHandler}
            />
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
        fontSize: 15,
    }
});
  