
// import react from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ReactComponent from "./ReactComponent";
import { PaperProvider } from "react-native-paper";
import MyComponent from "./MyComponent";
import DialogComponent from "./DialogComponent";
import CardComponent from "./CardComponent";
import SnackComponent from "./SnackComponent";
import ListComponent from "./ListComponent";

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
       {/* <MyComponent /> */}
       {/* <DialogComponent/> */}
       {/* <CardComponent /> */}
       {/* <SnackComponent /> */}
       <ListComponent />
      </PaperProvider>
    </SafeAreaProvider> 
  );
};

export default App;

// import react from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import ContactList from "./flatlist";


// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <ContactList />
//     </SafeAreaProvider>
//   );
// };

// export default App;


// import React from "react";
// import { Provider as PaperProvider } from "react-native-paper";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import MyComponent from "./MyComponent";


// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <PaperProvider>
//        <MyComponent />
//       </PaperProvider>
//     </SafeAreaProvider>
//   );
// };

// export default App;


// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello uuuu</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });