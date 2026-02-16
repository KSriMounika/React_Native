
import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

import person_1 from "./assets/person_1.jpg";
import person_2 from "./assets/person_2.jpg";


const Mydata = [
  {
    id: 1,
    ContactImg: person_1,
    ContactName: "Anju",
    ContactMsg: "Hello...",
  },
  {
    id: 2,
    ContactImg: person_2,
    ContactName: "Rama",
    ContactMsg: "God bless you",
  },
  {
    id: 3,
    ContactImg: person_1,
    ContactName: "Maha",
    ContactMsg: "hi",
  },
  {
    id: 4,
    ContactImg: person_2,
    ContactName: "Anjaneya",
    ContactMsg: "Rama",
  },
];

const ContactList = () => {
  return (
    <FlatList
      data={Mydata}
      renderItem={({ item }) => (
        <View style={Mystyles.parent_View}>
          <View style={Mystyles.Image_info}>
            <Image style={Mystyles.Image_Tag} source={item.ContactImg} />
          </View>

          <View style={Mystyles.Info_view}>
            <Text style={Mystyles.name}>{item.ContactName}</Text>
            <Text style={Mystyles.msg}>{item.ContactMsg}</Text>
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ContactList;

const Mystyles = StyleSheet.create({
  parent_View: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#D9D9D9"
  },
  Image_info: {
    height: 100,
    width: 100,
  },
  Image_Tag: {
    width: "100%",
    height: "100%",
    
  },
  Info_view: {
    justifyContent: "space-evenly",
    marginLeft: 15,
  },
  msg: {
    fontSize: 16
  },
  name: {
    fontSize: 18
  },
});