import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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
    <ScrollView style={styles.wrapper}>
        <Navbar title="Todo App" />
        <View style={styles.container}>
          <AddTodo onSubmit={addTodo} />
          <View>
            {todos.map(todo => (
              <Todo key={todo.id.toString()} todo={todo} />
            ))}
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
