
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

// import react from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import Component from "./ReactComponent";


// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <Component />
//     </SafeAreaProvider>
//   );
// };

// export default App;

import react from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ContactList from "./flatlist";


const App = () => {
  return (
    <SafeAreaProvider>
      <ContactList />
    </SafeAreaProvider>
  );
};

export default App;



