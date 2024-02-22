import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppContext from "./components/AppContext";

import LoginScreen from "./screens/Login";
import CabinetScreen from "./screens/Cabinet";
import Converter from "./screens/Converter";
import WeatherApp from "./screens/WeatherApp";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const userSettings = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="weather"
            component={WeatherApp}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="converter"
            component={Converter}
            options={{
              headerShown: false,
            }}
          /> */}
          {/* <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="cabinet"
            component={CabinetScreen}
            options={{
              // headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
