import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import GalaryScreen from "./screens/galaryScreen";
import MenuScreen from "./screens/menuScreen";
import PhotoScreen from "./screens/photoScreen";

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  GalaryScreen: GalaryScreen,
  MenuScreen: MenuScreen,
 PhotoScreen: PhotoScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
