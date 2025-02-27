import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {getStatusBarStyle, layoutContainer} from '../utils/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';

const PasswordScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
  // getting the email from the previous screen
  const {email} = useRoute().params;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={[styles.container, getStatusBarStyle()]}>
      <View style={layoutContainer}>
        <View style={styles.header}>
          <BackButton />
        </View>

        <View style={styles.imageAndIconContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="lock" size={26} color="black" />
            </View>
            <Image
              style={styles.image}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
              }}
            />
          </View>
        </View>

        <View>
          <Text style={styles.title}>Please choose a password.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password (required)"
              placeholderTextColor="#afaeae"
              autoFocus
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#9a9a9a"
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}
            />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            <Ionicons name="alert-circle-outline" size={26} color="#dc4545" />
            <Text style={styles.infoNote}>
              Choose a strong password to protect your account.
            </Text>
          </View>
        </View>
      </View>
      <CustomButton
        label="Submit"
        onPress={() => navigation.navigate('Otp', {email: email})}
      />
    </SafeAreaView>
  );
};

export default PasswordScreen;

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
    marginVertical: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9a9a9a',
  },
  input: {
    flex: 1,
    fontSize: 20,
    paddingVertical: 8,
    marginBottom: 0,
  },
  eyeIcon: {
    padding: 10,
    marginBottom: 0,
    alignSelf: 'center',
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
});
