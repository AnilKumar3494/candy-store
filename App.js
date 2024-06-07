import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Notifications } from 'expo-notifications';
import { registerRootComponent } from 'expo';
import store from './store';
import MainContainer from './navigation/MainContainer';

export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
      // Handle the notification response here
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

registerRootComponent(App);