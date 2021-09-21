import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import {Navbar} from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
      const newTodo = {
          id: Date.now().toString(),
          title: title,
      }


      setTodos(prevTodos => ([
          ...prevTodos,
          newTodo
      ]));
  }

  const removeTodo = (id) => {
    setTodos(prevTodos => (
      prevTodos.filter(todo => todo.id !== id)
    ));
  }

  return (
    <View style={styles.wrapper}>
        <Navbar title="Todo App" />
        <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: '100%',
    paddingTop: 80,
  },
});
