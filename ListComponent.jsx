import * as React from 'react';
import { View, StyleSheet, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { List } from 'react-native-paper';

const ListComponent = () => {
  const [expanded, setExpanded] = React.useState(true);
  const insets = useSafeAreaInsets();
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
    <StatusBar barStyle="light-content" />
    <View
                    style={[
                      styles.statusBar,
                      { height: insets.top }
                    ]}
    />
    <List.Section title="Accordions">
      <List.Accordion
        title="Puppy Breeds"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Pomerian" />
        <List.Item title="Golden Retriever" />
         <List.Item title="German Shepherd " />
      </List.Accordion>

      {/* <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion> */}
    </List.Section>
    </>
  );
};

export default ListComponent;
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "green",
  },
  container: {
   
    padding: 20,
  },
});