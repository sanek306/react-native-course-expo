import React, {useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { EditModal } from '../components/EditModal';

import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { AppButton } from '../components/ui/AppButton';
import { AppTextBold } from '../components/ui/AppTextBold';
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
                <AppTextBold style={styles.title}>{todo && todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <AppButton style={styles.button} onPress={goBack} color={THEME.GRAY_COLOR}>
                    <AntDesign name='back' size={20} color='#fff' />
                </AppButton>
                <AppButton style={styles.button} color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}>
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
  