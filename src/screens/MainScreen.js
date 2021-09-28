import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = ({ 
    todos,
    addTodo,
    removeTodo
}) => {

    return (
        <View>
            <AddTodo onSubmit={addTodo} />

            <FlatList 
                data={todos}
                renderItem={({ item }) => (
                    <Todo todo={item} onRemove={removeTodo} />
                )}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});
  