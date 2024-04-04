import {
  ApplicantList,
  EditProfileAdmin,
  TotalEmloyeesList,
} from "./src/pages/admin";
import { ChangePassword, Login, Signup, Welcome } from "./src/auth/index";

import BottomTabNavAdmin from "./navigations/BottomTabNavAdmin";
import BottomTabNavUser from "./navigations/BottomTabNavUser";
import { EditProfile } from "./src/pages";
import { NavigationContainer } from "@react-navigation/native";
import ViewApplicantProfile from "./src/pages/admin/ViewApplicantProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTabNavAdmin"
          component={BottomTabNavAdmin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTabNavUser"
          component={BottomTabNavUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfileAdmin"
          component={EditProfileAdmin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ApplicantList"
          component={ApplicantList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TotalEmloyeesList"
          component={TotalEmloyeesList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ViewApplicantProfile"
          component={ViewApplicantProfile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
