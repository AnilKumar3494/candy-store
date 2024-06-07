import * as Notifications from 'expo-notifications';

const sendPushNotification = async (token, title, message, data) => {
  try {
    await Notifications.sendPushNotificationAsync({
      to: token,
      title,
      message,
      data,
    });
  } catch (error) {
    console.error(error);
  }
};

export default sendPushNotification;