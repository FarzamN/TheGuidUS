import {useState} from 'react';
import {openPicker, openCamera} from 'react-native-image-crop-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {iOS} from '../util/constants';

const useImagePicker = () => {
  const [image, setImage] = useState(null);
  const [picker, setPicker] = useState(false);

  const galleryLaunch = () => {
    openPicker({
      mediaType: 'photo',
      cropping: true,
    })
      .then(item => {
        setImage({
          name: item.path,
          uri: item.path,
          type: item.mime,
        });
        setPicker(false);
      })
      .catch(error => {
        if (error.code === 'E_PICKER_CANCELLED') {
          console.log('User cancelled image picker');
        } else {
          console.log('ImagePicker Error:', error.message);
        }
      });
  };

  const cameraLaunch = async () => {
    try {
      openCamera({
        mediaType: 'photo',
        cropping: true,
      })
        .then(image => {
          setImage({
            name: image.filename,
            uri: image.path,
            type: image.mime,
          });
          setPicker(false);
        })
        .catch(error => {
          if (error.code === 'E_PICKER_CANCELLED') {
            console.log('User cancelled image picker');
          } else {
            console.log('ImagePicker Error:', error.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const permission = iOS
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;

      const result = await request(permission, {
        title: 'App Camera Permission',
        message: 'App needs access to your camera',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if (result === RESULTS.GRANTED) {
        console.log('You can use the camera');
        setPicker(true);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err, 'catch error camera picker');
    }
  };

  const onClose = () => setPicker(false);

  return {
    picker,
    image,
    onClose,
    cameraLaunch,
    galleryLaunch,
    setPicker,
    requestCameraPermission,
  };
};

export default useImagePicker;
