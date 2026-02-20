
import * as React from 'react';
import { View, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';

const DialogComponent = () => {

  const insets = useSafeAreaInsets();
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <>
    <StatusBar barStyle="light-content" />
    
          <View
            style={[
              styles.statusBar,
              { height: insets.top }
            ]}
    />
    <Provider>
      <View style={styles.container}>
        <Button mode="contained" onPress={showDialog}>
          Open Dialog Box
        </Button>
      </View>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Welcome Home</Dialog.Title>
          <Dialog.Content>
            <Text>Aditya University..Technical Hub </Text>
            {/* <Button>How are you..</Button> */}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={() => console.log('Ok')}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
    </>
  );
};

export default DialogComponent;
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "green",
  },
  container: {
   
    padding: 20,
  },
});