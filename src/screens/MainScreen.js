import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { AppLoader } from '../components/ui/AppLoader';
import { AppText } from '../components/ui/AppText';
import { AppButton } from '../components/ui/AppButton';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';
import { THEME } from '../theme';

export const MainScreen = () => {
    const { 
        todos,
        addTodo,
        removeTodo,
        fetchTodos,
        loading,
        error
     } = useContext(TodoContext);
     const { 
        changeScreen,
     } = useContext(ScreenContext);
     
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);
    
    useEffect(() => {
        const update =  () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
            setDeviceWidth(width);
        };

        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update);
        }
    })

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos();
    }, [])


    if (loading) {
        return <AppLoader />
    }
    if (error) {
        return (
            <View style={styles.center}>
                <AppText style={styles.error}>{error}</AppText>
                <AppButton onPress={loadTodos}>
                    Повторить
                </AppButton>
            </View>
        )
    }
    
    let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList 
                data={todos}
                renderItem={({ item }) => (
                    <Todo todo={item} onRemove={removeTodo} openTodo={changeScreen} />
                )}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );

    if (todos.length === 0) {
        content = (
            <View style={styles.imageWrapper}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/no-items.png')}
                    resizeMode='contain'
                />
            </View>
        );
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%'
    },
    error: {
        color: THEME.DANGER_COLOR,
        fontSize: 20
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
  