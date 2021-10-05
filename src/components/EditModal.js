import React, {useEffect, useState} from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({ visible, onClose, onSave, value }) => {
    const [title, setTitle] = useState('');

    useEffect(() => setTitle(value), [value])

    const saveHandler = () => {
        const lengthTitle = title.trim().length;
        if (lengthTitle < 3) {
            Alert.alert('Ошибка', `Минимальная длина названия 3 символа. Сейчас ${lengthTitle}`)
        } else {
            onSave(title);
        }
    };

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.wrapper}>
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder='Введите название'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title="Отменить" color={THEME.DANGER_COLOR} onPress={onClose} />
                    <Button title="Сохранить" onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
  