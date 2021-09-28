import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(1);
  const [todos, setTodos] = useState([{
    id: 1, title: 'Написать приложение'
  }]);

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
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find(({ id }) => id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />
  }

  return (
    <View>
        <Navbar title="Todo App" />
        <View style={styles.container}>
          {content}
        </View>
    </View>
  );
}

const headerHeight = 80;
const padding = 30;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: padding,
    height: '100%',
    paddingTop: headerHeight + padding,
  },
});
