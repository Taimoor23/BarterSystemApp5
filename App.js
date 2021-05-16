import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';

import customSideBarMenu from './components/customSideBarMenu'
import { BottomNavigator } from './components/BottomNavigator';
import  settings  from './components/settings';

import LoginScreen from './screens/LoginScreen'

export default function App() {
  return (
      <AppContainer/>
  );
}

 const AppDrawerNavigator = createDrawerNavigator(
 {
   home:{screen:BottomNavigator},
   settings:{screen:settings}
 },
 {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName : "Home"
    }
 )

 const SwitchNavigator = createSwitchNavigator({
     LoginScreen:LoginScreen,
     AppDrawerNavigator:AppDrawerNavigator,
 })

 const AppContainer = createAppContainer(SwitchNavigator);
