import * as Notifications from 'expo-notifications';
import { useState } from 'react';
import React, { useEffect } from 'react';

const NotificationHandler = () => {
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    Notifications.requestPermissionsAsync().then((permission) => {
      if (permission.granted) {
        console.log('Permission granted');
      } else {
        console.log('Permission denied');
      }
    });
  }, []);

  useEffect(() => {
    Notifications.registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
      console.log(`Registered for push notifications with token: ${token}`);
    });
  }, []);

  return null;
};

export default NotificationHandler;