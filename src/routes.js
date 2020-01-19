import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Create from './pages/Create';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'NoteApp',
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: 'bold',
        }
      },
    },
    Create: {
      screen: Create,
      navigationOptions: {
        title: 'Add a new note',
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: 'bold',
        }
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: '#111'
      },
      headerTintColor: '#fff',
    }
  }),
);

export default Routes;