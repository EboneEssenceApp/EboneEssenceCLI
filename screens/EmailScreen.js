import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {getStatusBarStyle, layoutContainer} from '../utils/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';

const EmailScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');

  console.log(setEmail);

  return (
    <SafeAreaView style={[styles.container, getStatusBarStyle()]}>
      <View style={layoutContainer}>
        <View style={styles.header}>
          <BackButton />
        </View>

        <View style={styles.infoVerificationContainer}>
          <Text style={styles.infoVerificationText}>
            Please provide an active email address that you have access to because you will be required to verify the email prior to accessing your account.
          </Text>
        </View>

        <View style={styles.imageAndIconContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="mail-outline" size={26} color="black" />
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
          <Text style={styles.title}>Provide your email?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email (required)"
            placeholderTextColor="#afaeae"
            autoFocus
            keyboardType="email-address"
            // value={name}
            // onChangeText={setName}
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            <Ionicons name="alert-circle-outline" size={26} color="#dc4545" />
            <Text style={styles.infoNote}>
              We'll send a verification code to your email.
            </Text>
          </View>
        </View>
      </View>
      <CustomButton
        label="Submit"
        // passing the email value to the next screen
        onPress={() => navigation.navigate('Password', {email: email})}
      />
    </SafeAreaView>
  );
};

export default EmailScreen;

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
  infoVerificationContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  infoVerificationText: {
    fontSize: 14,
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
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#9a9a9a',
    paddingVertical: 8,
    marginBottom: 16,
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
    marginLeft: 10,
  },
});
