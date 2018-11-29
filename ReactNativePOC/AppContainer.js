import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/login/login.component';

const RootStack = createStackNavigator(
    {
        Home: Login
    },
    {
        initialRouteName: 'Home',
    }
);

export default AppContainer = createAppContainer(RootStack);