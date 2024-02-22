import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  useColorScheme,
} from "react-native";

import { CURRENCY, CURRENCIES } from "../configConverter.json";

export default function ConverterHeader() {

  return (
    <View>      
      <View style={{marginVertical: 10}}>
        <Text style={{marginBottom: 20, color: "white", fontSize: 40, fontWeight: 700}}>Главная</Text>
        <Text style={{color: "white", fontSize: 20, fontWeight: 500}}>Курсы валют</Text>
      </View>
    </View>
  );
}
