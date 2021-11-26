// In App.js in a new project

import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import Router from './src/navigation/Router';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import Firebase from '@react-native-firebase/app';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
