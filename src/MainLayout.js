import React, {useState,useContext} from 'react';
import { View, StyleSheet, Alert } from 'react-native';


import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { Navbar } from './components/Navbar';
import { THEME } from './theme';
import { TodoContext } from './context/todo/todoContext';


export const MainLayout = () => {
    const {
        todos, 
        addTodo,
        removeTodo,
        updateTodo
    } = useContext(TodoContext);
    const [todoId, setTodoId] = useState(null);
  
    const remove = (id) => {
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
                      removeTodo(id);
                  }
              }
          ],
          { cancelable: false }
      );
    };

    let content = (
      <MainScreen
        todos={todos}
        addTodo={addTodo}
        removeTodo={remove}
        openTodo={setTodoId}
      />
    );
  
    if (todoId) {
      const selectedTodo = todos.find(({ id }) => id === todoId);
      content = <TodoScreen 
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onRemove={remove}
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