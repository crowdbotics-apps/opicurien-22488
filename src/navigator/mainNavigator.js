import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList170611Navigator from '../features/ArticleList170611/navigator';
import ArticleList170610Navigator from '../features/ArticleList170610/navigator';
import BlankScreen50170609Navigator from '../features/BlankScreen50170609/navigator';
import BlankScreen49170608Navigator from '../features/BlankScreen49170608/navigator';
import Maps170544Navigator from '../features/Maps170544/navigator';
import Additem170543Navigator from '../features/Additem170543/navigator';
import Maps170539Navigator from '../features/Maps170539/navigator';
import UserProfile170535Navigator from '../features/UserProfile170535/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList170611: { screen: ArticleList170611Navigator },
ArticleList170610: { screen: ArticleList170610Navigator },
BlankScreen50170609: { screen: BlankScreen50170609Navigator },
BlankScreen49170608: { screen: BlankScreen49170608Navigator },
Maps170544: { screen: Maps170544Navigator },
Additem170543: { screen: Additem170543Navigator },
Maps170539: { screen: Maps170539Navigator },
UserProfile170535: { screen: UserProfile170535Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
