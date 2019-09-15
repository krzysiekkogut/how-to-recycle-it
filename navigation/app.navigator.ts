import {createStackNavigator} from 'react-navigation-stack';

import {Routes} from './routes';

import SearchScreen from '../screens/search/search.screen';
import ResultScreen from '../screens/result/result.screen';
import CameraScreen from '../screens/camera/camera.screen';

export default createStackNavigator(
  {
    [Routes.Search]: {screen: SearchScreen},
    [Routes.Result]: {screen: ResultScreen},
    [Routes.Camera]: {screen: CameraScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: Routes.Search,
  },
);
