
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

// import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import ReactComponent from "./ReactComponent";
// import { PaperProvider } from "react-native-paper";
// import MyComponent from "./MyComponent";
// import DialogComponent from "./DialogComponent";
// import CardComponent from "./CardComponent";
// import SnackComponent from "./SnackComponent";
// import ListComponent from "./ListComponent";

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <PaperProvider>
//        <MyComponent />
//        <DialogComponent/>
//        <CardComponent />
//        <SnackComponent />
//        <ListComponent />
//       </PaperProvider>
//     </SafeAreaProvider> 
//   );
// };

// export default App;

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





// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Icon } from 'react-native-paper';
// import Home from './Home';
// import Contact from './Contact';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Icon} from 'react-native-paper';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createNativeStackNavigator()
// export default function App() {
//   return (
//    <NavigationContainer>
//     <Stack.Navigator
//       screenOptions={{
//         title:"HAI"
//         headerShown:false
//         headerStyle:{
//           backgroundColor:"red"
//         }
//         headerTintColor:"red"
//         headerTitleStyle:{
//           fontSize:26
//         }
//         headerTitleAlign:"center",
//         headerRight:()=> <Icon source={"bell"} size={24}/>,
//         headerLeft:() => <Icon source={"home"} size={24}/>,
//         headerBackButtonDisplayMode:"minimal",
//         animation:"fade"

//       }}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Contact" component={Contact} />
//     </Stack.Navigator>
//    </NavigationContainer>
//   );
// }



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import Home from './Home';
import Contact from './Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        title:"HAI",
        // headerShown:false,
        headerStyle:{
          backgroundColor:"red"
        },
        headerTintColor:"black",
        headerTitleStyle:{
          fontSize:26
        },
        headerTitleAlign:"center",
        headerRight:()=> <Icon source={"bell"} size={24}/>,
        headerLeft:() => <Icon source={"home"} size={24}/>,
        headerBackButtonDisplayMode:"minimal",
        animation:"fade"

      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

// import react from "react";
// import TopbarNavigation from "./TopbarNavigation";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// const App = () =>{
//   return(
//     <SafeAreaProvider>
//       <TopbarNavigation />
//     </SafeAreaProvider>
//   )
// }

// export default App;