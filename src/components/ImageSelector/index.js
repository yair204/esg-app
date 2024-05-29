import React, {useState, useEffect} from 'react';
import {Text, View, Linking, Platform, Image,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {requestPhotoAccessPermission} from '../../utils/permissions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {MakePhotoIcon} from './../../images/MakePhotoIcon';
import {AddFromGalleryIcon} from './../../images/AddFromGalleryIcon';
// import {TouchableText} from '../TouchebleTextWithTitle';
// import {strings} from '../../i18n/index';
// import ImageResizer from 'react-native-image-resizer';
import ImageResizer from '@bam.tech/react-native-image-resizer';
// import CustomAlert from '../../components/CustomAlert';
import defaultAvatar from './../../images/upload_cloud.png';
import {
  storeAsyncStorageValue,
  getAsyncStorageData,
} from '../../storage/async-storage';
import {RemoveCircle} from './../../images/RemoveCircle';
import { color } from 'react-native-elements/dist/helpers';

export const ImageCarouselPicker = ({onSelect, visible}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showGoToSettingAlert, setShowGoToSettingAlert] = useState(false);

  useEffect(() => {
    const checkConfirm = async () => {
      const confirm = await getAsyncStorageData('acceptCameraAndGallery');
      if ((!confirm || confirm === null) && visible) {
        setShowAlert(true);
      }
    };
    checkConfirm();
  }, [visible]);

  const maxWidth = 800;
  const maxHeight = 600;
  const quality = 80;
  const defaultAvatarUri = Image.resolveAssetSource(defaultAvatar).uri;

  // const handleCloseAlertPermissions = () => {
  //   setShowAlert(false);
  //   storeAsyncStorageValue('acceptCameraAndGallery', true);
  // };

  // const openCamera = async () => {
  //   const result = await launchCamera();
  //   const accessStatus = await requestPhotoAccessPermission();
  //   if (accessStatus == 'granted') {
  //     handleImageSelection(result?.assets[0]);
  //   }else{
  //     checkPermissions(accessStatus);
  //   }
  // };

  const openGallery = async () => {
    const result = await launchImageLibrary();
    handleImageSelection(result?.assets[0]);
  };

  const handleImageSelection = async (image) => {
    try {
      const compressedImageUri = await resizeAndCompressImage(image?.uri);

      onSelect({
        ...image,
        uri: compressedImageUri,
      });
    } catch (error) {
      console.error('Error resizing and compressing image:', error);
    }
  };

  const resizeAndCompressImage = (imageUri) => {
    return new Promise((resolve, reject) => {
      ImageResizer.createResizedImage(
        imageUri,
        maxWidth,
        maxHeight,
        'JPEG',
        quality,
      )
        .then((compressedImage) => {
          resolve(compressedImage.uri);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  // const checkPermissions = async (accessStatus) => {
  //     if (accessStatus !== 'granted') {
  //       setShowGoToSettingAlert(true);
  //     }
  //     return 'notGranted';
  // };

  // const onCloseGoToSettingAlert = async (bool) => {
  //   if (bool === false) {
  //     setShowGoToSettingAlert(false);
  //   } else {
  //     Linking.openSettings();
  //     setShowGoToSettingAlert(false);
  //   }
  // };

  return (
    <View
    //  style={styles.backdropWrapper}
     >
     
      
        <TouchableOpacity
          onPress={openGallery}>
          <AddFromGalleryIcon />
        </TouchableOpacity>
       
    </View>
  );
};
