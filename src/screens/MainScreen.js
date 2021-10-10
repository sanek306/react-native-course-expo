import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ 
    todos,
    addTodo,
    openTodo,
    removeTodo
}) => {
    let content = (
        <FlatList 
            data={todos}
            renderItem={({ item }) => (
                <Todo todo={item} onRemove={removeTodo} openTodo={openTodo} />
            )}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
        />
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
    }
});
  