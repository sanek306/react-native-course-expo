import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { Navbar } from "./components/Navbar";
import { THEME } from "./theme";
import { ScreenContext } from "./context/screen/screenContext";

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View style={styles.wrap}>
      <Navbar title="Todo App" />
      <View style={styles.container}>{
        todoId ? <TodoScreen /> : <MainScreen />
      }</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    height: "100%",
    paddingTop: THEME.HEADER_HEIGHT + THEME.PADDING_HORIZONTAL,
  },
});
