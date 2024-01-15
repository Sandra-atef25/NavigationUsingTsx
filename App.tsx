import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContextProvider  from "./Components/UsernameContext/UserContext";

import MainStackAuthentication from "./NavigationContainer/AuthenticationScreens";
import MainStackTwo from "./NavigationContainer/StackTwo";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MainStack"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="MainStack"
              component={MainStackAuthentication}
            />
            <Stack.Screen name="MainStackTwo" component={MainStackTwo} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
}
