import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null);
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

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
    />
  );

  if (todoId) {
    content = <TodoScreen/>
  }

  return (
    <View style={styles.wrapper}>
        <Navbar title="Todo App" />
        <View style={styles.container}>
          {content}
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
