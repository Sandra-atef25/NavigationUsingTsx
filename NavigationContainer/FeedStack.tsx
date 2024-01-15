import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedScreen from "../Screens/Feed/FeedScreen";
import FeedDetails from "../Screens/Feed/FeedDetails";

function FeedStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
    >
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen
        name="FeedDetails"
        component={FeedDetails}
        options={{ headerTitle: "Feed Details" }}
      />
    </Stack.Navigator>
  );
}
export default FeedStack;
