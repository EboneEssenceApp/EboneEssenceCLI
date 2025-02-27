import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {getStatusBarStyle} from '../utils/layout';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const BasicInfoScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, getStatusBarStyle()]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>You're one of a kind!</Text>
        <Text style={styles.subTitle}>Your profile should be too.</Text>
      </View>

      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/love.json')}
          autoPlay
          loop
          speed={0.7}
          style={styles.animation}
        />
      </View>

      <CustomButton
        label="Enter Basic Details"
        onPress={() => navigation.navigate('Name')}
      />

      {/* <CustomButton
        label="Cancel"
        backgroundColor="#FF4444"
        width="90%"
        onPress={() => {}}
        style={styles.cancelButton}
        textStyle={styles.cancelButtonText}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    paddingTop: 40,
    marginBottom: 30,
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#666',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  animation: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  cancelButton: {
    marginBottom: 10
  },
  cancelButtonText: {
    fontSize: 18
  },
});

export default BasicInfoScreen;
