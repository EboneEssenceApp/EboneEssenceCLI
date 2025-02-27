import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {getStatusBarStyle, layoutContainer} from '../utils/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, Platform} from 'react-native';
import Animated from 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ITEM_SIZE = (Dimensions.get('window').width - 40) * 0.3;
const SPACING = 10;

const PhotoScreen = () => {
  const navigation = useNavigation();
  const [images, setImages] = useState(Array(6).fill(null));
  const [imageUrl, setImageUrl] = useState('');

  const handleGalleryUpload = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          {
            title: 'Photo Gallery Permission',
            message: 'App needs access to your photo gallery',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      response => {
        if (response.didCancel || response.errorCode) {
          return;
        }

        if (response.assets && response.assets[0]) {
          const newImageUri = response.assets[0].uri;
          setImages(currentImages => {
            // Find the first empty slot or use index 0 if all slots are filled
            const emptyIndex = currentImages.findIndex(img => img === null);
            const targetIndex = emptyIndex === -1 ? 0 : emptyIndex;

            // Create a new array with the image placed in the target position
            return currentImages.map((img, index) =>
              index === targetIndex ? newImageUri : img
            );
          });
        }
      },
    );
  };

  const handleUrlUpload = () => {
    if (imageUrl.trim()) {
      setImages(currentImages => {
        const emptyIndex = currentImages.findIndex(img => img === null);
        const targetIndex = emptyIndex === -1 ? 0 : emptyIndex;
        return currentImages.map((img, index) => 
          index === targetIndex ? imageUrl : img
        );
      });
      setImageUrl(''); // Clear input after upload
    }
  };

  return (
    <SafeAreaView style={[styles.container, getStatusBarStyle()]}>
      <View style={layoutContainer}>
        <View style={styles.header}>
          <BackButton />
        </View>

        <Text style={styles.title}>Select profile photos</Text>

        <View style={styles.imagesGrid}>
          {images.map((imageUri, index) => (
            <View key={index} style={styles.imageContainer}>
              {imageUri ? (
                <Image 
                  source={{ uri: imageUri }} 
                  style={styles.uploadedImage} 
                  resizeMode="cover" 
                />
              ) : (
                <View style={styles.placeholderContainer}>
                  <MaterialIcons name="add-a-photo" size={24} color="#666" />
                </View>
              )}
            </View>
          ))}
        </View>

        <View>
          <Text style={styles.infoText}>Drag and drop photos to reorder.</Text>
          <Text style={styles.numPhotos}>Add up to 6 photos.</Text>
        </View>

        <View style={styles.urlInputContainer}>
          <Text style={styles.urlInputLabel}>Add a picture of yourself</Text>
          <View style={styles.urlInputWrapper}>
            <MaterialIcons name="image" size={35} color="#666" style={styles.urlInputIcon} />
            <TextInput
              style={styles.urlInput}
              placeholder="Enter your image url"
              value={imageUrl}
              onChangeText={setImageUrl}
              onSubmitEditing={handleUrlUpload}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.uploadIconContainer}
          onPress={handleGalleryUpload}
        >
          <MaterialIcons name="add-a-photo" size={35} color="black" />
          <Text style={styles.uploadGalleryText}>Upload from gallery</Text>
        </TouchableOpacity>

        <CustomButton
          label="Submit"
          onPress={() => navigation.navigate('Photos')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 22,
  },
  imagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING,
    marginVertical: 20,
  },
  imageContainer: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    marginBottom: SPACING,
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  placeholderContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#aaa8a8',
  },
  numPhotos: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  uploadIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  uploadGalleryText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  urlInputContainer: {
    marginTop: 20,
  },
  urlInputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  urlInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  urlInputIcon: {
    marginRight: 8,
  },
  urlInput: {
    flex: 1,
    height: 44,
    fontSize: 14,
    backgroundColor: '#b3b3b3',
    borderRadius: 8,
  },
});

export default PhotoScreen;
