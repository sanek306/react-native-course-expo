import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import {Navbar} from './src/Navbar';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
      const newTodo = {
          id: Date.now().toString(),
          title,
      }

      setTodos(prevTodos => ([
          ...prevTodos,
          newTodo
      ]));
  }

  return (
    <View>
        <Navbar title="Todo App" />
        <View style={styles.container}>
          <AddTodo onSubmit={addTodo} />
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
