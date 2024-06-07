import React, { useState, useEffect } from 'react';
import sendPushNotification from '../api/pushNotifications';
import { expoPushToken } from '../components/NotificationHandler';

const CandySaleScreen = () => {
  const [candySale, setCandySale] = useState(false);

  useEffect(() => {
    async function getTokenAndSendNotification() {
      const token = await expoPushToken();
      if (candySale) {
        sendPushNotification(token, 'New Candy Alert!', 'Get 10% off on all candies today!', { type: 'candy_sale' });
      }
    }
    getTokenAndSendNotification();
  }, [candySale]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Candy Sale!</Text>
      <Text>Get 10% off on all candies today!</Text>
      <Button title="Shop Now" onPress={() => console.log('Shop now button pressed')} />
      <Switch value={candySale} onValueChange={(newValue) => setCandySale(newValue)} />
      <Text>Toggle candy sale: {candySale ? 'ON' : 'OFF'}</Text>
    </View>
  );
};