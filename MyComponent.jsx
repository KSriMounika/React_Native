
import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator, Badge, Button, TextInput, HelperText} from "react-native-paper";

const MyComponent = () => {
  const insets = useSafeAreaInsets();
  const [text, setText] = React.useState('');
  const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
};
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
        {/* <Text style={styles.text}>Aditya University</Text> */}
        {/* <Chip
          icon="information"
          onPress={() => console.log("Pressed")}
          style={{ marginTop: 20 }}
        >
          Example Chip
        </Chip> */}
        {/* <ActivityIndicator animating={true} size = {40} color={"red"} /> */}
        {/* <Badge size= {30}
              style={{backgroundColor:"purple"}}
        >5</Badge> */}
        {/* <Button icon="home" buttonColor={"red"} textColor="black" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
        </Button> */}
         {/* <TextInput
         label="Password"
         secureTextEntry
         right={<TextInput.Icon icon="eye" />}
        /> */}
        {/* <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
        /> */}
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
      </View>
    </>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "green",
  },
  container: {
   
    padding: 20,
  },
});

