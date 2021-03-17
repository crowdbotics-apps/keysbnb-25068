import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings215223Navigator from '../features/Settings215223/navigator';
import NotificationList215222Navigator from '../features/NotificationList215222/navigator';
import Maps215221Navigator from '../features/Maps215221/navigator';
import Maps4215216Navigator from '../features/Maps4215216/navigator';
import UserProfile7215213Navigator from '../features/UserProfile7215213/navigator';
import BlankScreen0215210Navigator from '../features/BlankScreen0215210/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings215223: { screen: Settings215223Navigator },
NotificationList215222: { screen: NotificationList215222Navigator },
Maps215221: { screen: Maps215221Navigator },
Maps4215216: { screen: Maps4215216Navigator },
UserProfile7215213: { screen: UserProfile7215213Navigator },
BlankScreen0215210: { screen: BlankScreen0215210Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
