import { PermissionsAndroid, Platform } from 'react-native';
import { PERMISSIONS, check, request, RESULTS } from 'react-native-permissions';
import { strings } from '../i18n/index';
import Geolocation from 'react-native-geolocation-service';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import messaging from '@react-native-firebase/messaging';

const LOCATION_PERMISSION = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
const BACKGROUND_LOCATION_PERMISSION =
  PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION;
const NOTIFICATION_PERMISSION =
  PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;

const requestPhotoAccessPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const cameraResult = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (cameraResult !== PermissionsAndroid.RESULTS.GRANTED) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );

        if (granted === 'granted') {
          return 'granted';
        } else {
          console.error('Camera permission not granted');
        }
      }
    } else if (Platform.OS === 'ios') {
        const iosPermissions = await check(PERMISSIONS.IOS.CAMERA);
        if (iosPermissions === RESULTS.GRANTED) {
          return 'granted'
        } else {
          return 'notGranted'
        }
    }
  } catch (error) {
    console.error('Error requesting camera permissions:', error);
  }
};


// const requestNotificationPermission = async () => {
//   try {
//     if (Platform.OS === 'android') {
//       const hasAndroidPermissions = await PermissionsAndroid.check(
//         NOTIFICATION_PERMISSION,
//       );
//       const granted = await PermissionsAndroid.request(NOTIFICATION_PERMISSION);
//       if (hasAndroidPermissions === PermissionsAndroid.RESULTS.GRANTED) {
//         return granted;
//       } else {
//         if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//           console.error('Notification permission not granted');
//         }
//       }
//     }

//     if (Platform.OS === 'ios') {
//       const iosPermissions = await PushNotificationIOS.requestPermissions({
//         alert: true,
//         sound: true,
//         badge: true,
//         carPlay: true,
//       });

//       const authStatus = await messaging().requestPermission();
//       const enabled = 
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if(enabled){
//         return 'granted';
//       }
//     }
//   } catch (error) {
//     console.error('Error requesting notification permissions:', error);
//   }
// };

const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true;
};

//  const requestCalendarPermissions = async () => {
//   const permissionRequest = await request(
//     Platform.OS === 'ios'
//       ? PERMISSIONS.IOS.CALENDARS
//       : PERMISSIONS.ANDROID.WRITE_CALENDAR,
//     PERMISSIONS.ANDROID.READ_CALENDAR,
//   )
//   if (permissionRequest === RESULTS.GRANTED) {
//     return true;
//   } else if (permissionRequest !== RESULTS.GRANTED) {
//     return false;
//   }
// };

export {
//   requestNotificationPermission,
  requestLocationPermission,
  requestPhotoAccessPermission,
//   requestCalendarPermissions,
};
