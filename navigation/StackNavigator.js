import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LikesScreen from './../screens/LikesScreen';
import ChatScreen from './../screens/ChatScreen';
import ProfileScreen from './../screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import BasicInfoScreen from '../screens/BasicInfoScreen';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import OtpScreen from '../screens/OtpScreen';
import PasswordScreen from '../screens/PasswordScreen';
import DateOfBirthScreen from '../screens/DateOfBirthScreen';
import LocationScreen from '../screens/LocationScreen';
import GenderScreen from '../screens/GenderScreen';
import PreFinalScreen from '../screens/PreFinalScreen';
import WritePromptScreen from '../screens/WritePromptScreen';
import TypeScreen from '../screens/TypeScreen';
import DatingTypeScreen from '../screens/DatingTypeScreen';
import LookingForScreen from '../screens/LookingForScreen';
import HomeTownScreen from '../screens/HomeTownScreen';
import WorkplaceScreen from '../screens/WorkplaceScreen';
import JobTitleScreen from '../screens/JobTitleScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PromptsScreen from '../screens/PromptsScreen';
import ShowPromptsScreen from '../screens/ShowPromptsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({
  name,
  focused,
  IconComponent,
  focusedColor = '#fff',
  unfocusedColor = '#989898',
}) => (
  <IconComponent
    name={name}
    size={32}
    color={focused ? focusedColor : unfocusedColor}
  />
);

const homeTabIcon = props => (
  <TabIcon
    {...props}
    name="home"
    IconComponent={MaterialIcons}
    focusedColor="#FF4D4D"
  />
);

const likesTabIcon = props => (
  <TabIcon
    {...props}
    name="heart"
    IconComponent={Entypo}
    focusedColor="#FF69B4"
  />
);

const chatTabIcon = props => (
  <TabIcon
    {...props}
    name="chat-bubble-outline"
    IconComponent={MaterialIcons}
    focusedColor="#2196F3"
  />
);

const profileTabIcon = props => (
  <TabIcon
    {...props}
    name="person-circle-outline"
    IconComponent={Ionicons}
    focusedColor="#4CAF50"
  />
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#101010', height: 70},
        tabBarItemStyle: {paddingVertical: 10},
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: homeTabIcon,
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          tabBarIcon: likesTabIcon,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: chatTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: profileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Basicinfo"
        component={BasicInfoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Birthday"
        component={DateOfBirthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dating"
        component={DatingTypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LookingFor"
        component={LookingForScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hometown"
        component={HomeTownScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WorkPlace"
        component={WorkplaceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JobTitle"
        component={JobTitleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Photos"
        component={PhotoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Prompts"
        component={PromptsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowPrompts"
        component={ShowPromptsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WritePrompt"
        component={WritePromptScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PreFinal"
        component={PreFinalScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
