import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
    <View>
        <Navbar title="Todo App" />
        <View style={styles.container}>
          <AddTodo onSubmit={addTodo} />
          <View>
            {todos.map(todo => (
              <Todo key={todo.id.toString()} todo={todo} />
            ))}
          </View>
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
