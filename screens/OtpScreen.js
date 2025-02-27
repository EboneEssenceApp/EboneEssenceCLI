import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getStatusBarStyle, layoutContainer} from '../utils/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = Array(6).fill(0).map(() => React.createRef());
  const {email} = useRoute().params;

  console.log(email);


  useEffect(() => {
    // Focus on the first input when component mounts
    inputRefs[0].current?.focus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOtpChange = (value, index) => {
    const newOtpValues = [...otpValues];

    // Handle backspace/delete from virtual keyboard
    if (value === '') {
      newOtpValues[index] = '';
      setOtpValues(newOtpValues);

      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
      return;
    }

    // Handle normal input
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = ({nativeEvent: {key}}, index) => {
    // Physical keyboard backspace handling
    if (key === 'Backspace' && index >= 0) {
      const newOtpValues = [...otpValues];

      // If current input is empty and not first input, move to previous
      if (otpValues[index] === '' && index > 0) {
        inputRefs[index - 1].current?.focus();
        return;
      }

      // Clear current input
      newOtpValues[index] = '';
      setOtpValues(newOtpValues);

      // Move to previous input
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  const verifyOtp = async () => {
    // Add validation check before proceeding
    if (otpValues.some(value => !value)) {
      return;
    }

    setIsVerifying(true);
    setError('');
    const otp = otpValues.join('');

    // For testing purposes, let's assume "123456" is the correct OTP
    // Replace this with your actual OTP verification logic
    if (otp === '123456') {
      navigation.navigate('Birthday');
    } else {
      setError('Invalid verification code. Please try again.');
    }

    setIsVerifying(false);
  };

  const handleResend = async () => {
    if (isResending) {
      return;
    }

    try {
      setIsResending(true);
      setError('');

      // Add your API call here to resend OTP
      // For example:
      // await resendOTP(email);

      // Show success message in the error state (with positive message)
      setError('A new verification code has been sent to your email');
    } catch (err) {
      setError('Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
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
              <MaterialIcons name="security" size={26} color="black" />
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Enter verification code</Text>
          <Text style={styles.subtitle}>Enter the 6-digit code sent to your email</Text>
          <View style={styles.otpContainer}>
            {otpValues.map((value, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="number-pad"
                value={value}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
              />
            ))}
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            <Ionicons name="time-outline" size={26} color="#dc4545" />
            <Text style={styles.infoNote}>
              Code will expire in 10 minutes. Haven't received the code?{' '}
              <Text
                style={[styles.resendText, isResending && styles.resendTextDisabled]}
                onPress={handleResend}
              >
                {isResending ? 'Resending...' : 'Resend'}
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.errorContainer}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

      </View>
      <CustomButton
        label={isVerifying ? 'Verifying...' : 'Verify'}
        onPress={verifyOtp}
        disabled={otpValues.some(value => !value) || isVerifying}
        style={otpValues.some(value => !value) ? styles.disabledButton : null}
      />
    </SafeAreaView>
  );
};

export default OtpScreen;

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
  imageAndIconContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
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
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  otpInput: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#9a9a9a',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#f5f5f5',
  },
  infoContainer: {
    gap: 10,
    marginBottom: 10,
  },
  infoTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoNote: {
    marginLeft: 5,
    flex: 1,
  },
  resendText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  resendTextDisabled: {
    opacity: 0.5,
  },
  errorText: {
    color: '#dc4545',
    textAlign: 'center',
    marginTop: 10,
  },
  errorContainer: {
    marginTop: 35,
  },
  disabledButton: {
    backgroundColor: '#939393',
    opacity: 0.7,
  },
});
