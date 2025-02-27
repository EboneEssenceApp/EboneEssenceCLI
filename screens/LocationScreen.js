import {StyleSheet, Text, View, Image, PermissionsAndroid, Platform} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {getStatusBarStyle, layoutContainer} from '../utils/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const LocationScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 17.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const requestLocationPermission = useCallback(async () => {
    try {
      if (Platform.OS === 'android') {
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
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        }
      } else {
        getCurrentLocation();
      }
    } catch (err) {
      console.warn(err);
    }
  }, [getCurrentLocation]);

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, [requestLocationPermission]);

  return (
    <SafeAreaView style={[styles.container, getStatusBarStyle()]}>
      <View style={layoutContainer}>
        <View style={styles.header}>
          <BackButton />
        </View>

        <View style={styles.imageAndIconContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="room" size={26} color="black" />
            </View>
            <Image
              style={styles.image}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
              }}
            />
          </View>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.title}>Where are you located?</Text>
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={region}
              onRegionChangeComplete={setRegion}>
              <Marker coordinate={region} />
            </MapView>
          </View>
        </View>
      </View>

      <CustomButton
        label="Submit"
        onPress={() => navigation.navigate('Gender')}
      />
    </SafeAreaView>
  );
};

export default LocationScreen;

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
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    textTransform: 'uppercase',
    color: '#aaa8a8',
  },
  imageAndIconContainer: {
    marginTop: 40,
  },
  dateContainer: {
    marginTop: 20,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: '50%',
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
    gap: 10,
    marginBottom: 10,
  },
  infoTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoNote: {
    marginLeft: 5,
  },
  mapContainer: {
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

