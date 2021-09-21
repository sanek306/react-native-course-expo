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

  return (
    <View style={styles.wrapper}>
        <Navbar title="Todo App" />
        <View style={styles.container}>
          <AddTodo onSubmit={addTodo} />
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <Todo todo={item} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
