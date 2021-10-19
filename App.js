import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { useFonts } from 'expo-font';
import { THEME } from './src/theme';

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const [loaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  // {
  //   id: 1, title: 'Написать приложение'
  // }

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
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Удаления элемента",
      `Вы уверены, что хотите удалить ${todo.title}?`,
      [
        {
          text: "Отмена",
          style: "cancel"
        },
        { 
          text: "Удалить", 
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            setTodos(prevTodos => (
              prevTodos.filter(todo => todo.id !== id)
            ));
          }
        }
      ],
      { cancelable: false }
    );
  }

  const updateTodo = (id, newTitle) => {
    setTodos(old => (
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }

        return todo;
      })
    ));
  };

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
    content = <TodoScreen 
      goBack={() => setTodoId(null)}
      todo={selectedTodo}
      onRemove={removeTodo}
      onSave={updateTodo}
    />
  }

  return (
    <View style={styles.wrap}>
        <Navbar title="Todo App" />
        <View style={styles.container}>
          {content}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    height: '100%',
    paddingTop: THEME.HEADER_HEIGHT + THEME.PADDING_HORIZONTAL,
  },
});
