import React, {useState, useContext} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { EditModal } from '../components/EditModal';

import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { AppButton } from '../components/ui/AppButton';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppCard } from '../components/ui/Card';
import { THEME } from '../theme';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';

export const TodoScreen = () => {
    const [modal, setModal] = useState(false); 
    const { 
        todos,
        updateTodo,
        removeTodo,
     } = useContext(TodoContext);
     const { 
        todoId,
        changeScreen,
     } = useContext(ScreenContext);
     
    const todo = todos.find(({ id }) => id === todoId);

    const saveHandler = async (newTitle) => {
        await updateTodo(todo.id, newTitle);
        setModal(false);
    }

    return (
        <View>
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo && todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <AppButton style={styles.button} onPress={() => changeScreen(null)} color={THEME.GRAY_COLOR}>
                    <AntDesign name='back' size={20} color='#fff' />
                </AppButton>
                <AppButton style={styles.button} color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>
                    <FontAwesome name='remove' size={20} color='#fff'  />
                </AppButton>
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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: Dimensions.get('window').width / 3
        // width: Dimensions.get('window').width > 400 ? 150 : 100
    }
});
  