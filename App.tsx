import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './screens/search.screen';
import SearchResultScreen from './screens/search-result.screen';

const MainNavigator = createStackNavigator(
  {
    Search: {screen: SearchScreen},
    SearchResult: {screen: SearchResultScreen},
  },
  {
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
