import { AppRegistry, Platform } from 'react-native';

import AndroidLoginPage from './src/android/components/login';
import IOS_LoginPage from './src/ios/components/login';

Platform.select({
    ios: AppRegistry.registerComponent('digital_frame', () => IOS_LoginPage),
    android: AppRegistry.registerComponent('digital_frame', () => AndroidLoginPage)
});
