import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard, Alert } from 'react-native';
import { THEME } from '../theme';
import { AntDesign } from '@expo/vector-icons';


export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Название дела не может быть пустым!');
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела..."
                autoCorrect={false}
                autoCapitalize='none'
            />
            <AntDesign.Button name="pluscircleo" onPress={pressHandler}>
                Добавить
            </AntDesign.Button>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    input: {
        width: "60%",
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderStyle: "solid",
        borderBottomWidth: 2,
        fontSize: 15,
    }
});
  