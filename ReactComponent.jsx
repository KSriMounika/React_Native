import react from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Component = () => {
  const insets = useSafeAreaInsets();
  console.log(insets);

  return (
    <>
      <StatusBar barStyle="light-content" />
      
      
      <View
        style={[
          styles.statusBar,
          { height: insets.top }
        ]}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Aditya University</Text>
      </View>
    </>
  );
};

export default Component;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
