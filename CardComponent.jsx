
import * as React from 'react';
import { View, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Dialog, Portal, Provider, Text, Card, Icon, I } from 'react-native-paper';

const CardComponent = () => {

  const insets = useSafeAreaInsets();
  const [visible, setVisible] = React.useState(false);

  const showCard = () => setVisible(true);
  const hideCard = () => setVisible(false);

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
        <Button mode="contained" onPress={showCard}>
          Open Card
        </Button>
      </View>

      <Portal>
        <Card visible={visible} onDismiss={hideCard}>
          <Card.Title>Welcome Home</Card.Title>
           <Card.Cover source={{ uri: 'https://thumbs.dreamstime.com/b/cute-white-puppy-donning-red-christmas-hat-nestling-plush-blanket-twinkling-blue-backdrop-embodying-seasonal-cheer-389884311.jpg' }} />
          <Card.Content >
            <Icon source={"home"}></Icon>
            <Text >Hello cuties..... </Text>
            {/* <Button>How are you..</Button> */}
          </Card.Content>
          <Card.Actions>
            <Button onPress={hideCard}>Cancel</Button>
            <Button onPress={() => console.log('Ok')}>Ok</Button>
          </Card.Actions>
        </Card>
      </Portal>
    </Provider>
    </>
  );
};

export default CardComponent;
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "green",
  },
  container: {
   
    padding: 20,
  },
});