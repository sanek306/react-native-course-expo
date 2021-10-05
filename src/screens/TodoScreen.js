import React, {useState} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { EditModal } from '../components/EditModal';
import { AppCard } from '../components/ui/Card';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false); 

    const saveHandler = (newTitle) => {
        onSave(todo.id, newTitle);
        setModal(false);
    }

    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo && todo.title}</Text>
                <Button title='Ред.'  onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <Button title='Назад' color={THEME.GRAY_COLOR} onPress={goBack} />
                <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)} />
            </View>

            <EditModal visible={modal} onClose={() => setModal(false)} onSave={saveHandler} value={todo.title} />
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
  