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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({ name, focused, IconComponent, focusedColor = '#fff', unfocusedColor = '#989898' }) => (
  <IconComponent
    name={name}
    size={32}
    color={focused ? focusedColor : unfocusedColor}
  />
);

const homeTabIcon = (props) => (
  <TabIcon {...props} name="shuffle-outline" IconComponent={Ionicons} focusedColor="#FF4D4D" />
);

const likesTabIcon = (props) => (
  <TabIcon {...props} name="heart" IconComponent={Entypo} focusedColor="#FF69B4" />
);

const chatTabIcon = (props) => (
  <TabIcon {...props} name="chat-bubble-outline" IconComponent={MaterialIcons} focusedColor="#2196F3" />
);

const profileTabIcon = (props) => (
  <TabIcon {...props} name="person-circle-outline" IconComponent={Ionicons} focusedColor="#4CAF50" />
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#101010', height: 70 },
        tabBarItemStyle: { paddingVertical: 10 },
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
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
