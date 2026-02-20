import * as React from 'react';
import { View, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Snackbar } from 'react-native-paper';

const SnackComponent = () => {
  const [visible, setVisible] = React.useState(false);
  const insets = useSafeAreaInsets();
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

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
      <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
   statusBar: {
    backgroundColor: "green",
  },
  
});

export default SnackComponent;
