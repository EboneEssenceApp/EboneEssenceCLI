import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {getStatusBarStyle, layoutContainer} from '../utils/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';
import {Checkbox} from 'react-native-paper';

const DatingTypeScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <SafeAreaView style={[styles.container, getStatusBarStyle()]}>
      <View style={layoutContainer}>
        <View style={styles.header}>
          <BackButton />
        </View>

        <View style={styles.imageAndIconContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="favorite" size={26} color="black" />
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
          <Text style={styles.title}>Who are you looking for?</Text>
          <Text style={styles.infoDescription}>
            Select all type of relationship you're looking for.
          </Text>
          <View style={styles.genderContainer}>
            <View style={styles.genderOption}>
              <Text
                style={styles.genderText}
                onPress={() => setSelectedGender(selectedGender === 'male' ? null : 'male')}
              >
                Male
              </Text>
              <Pressable
                style={styles.radioButton}
                onPress={() => setSelectedGender(selectedGender === 'male' ? null : 'male')}
              >
                <View style={[styles.radioButtonInner, selectedGender === 'male' && styles.radioButtonSelected]} />
              </Pressable>
            </View>

            <View style={styles.genderOption}>
              <Text
                style={styles.genderText}
                onPress={() => setSelectedGender(selectedGender === 'female' ? null : 'female')}
              >
                Female
              </Text>
              <Pressable
                style={styles.radioButton}
                onPress={() => setSelectedGender(selectedGender === 'female' ? null : 'female')}
              >
                <View style={[styles.radioButtonInner, selectedGender === 'female' && styles.radioButtonSelected]} />
              </Pressable>
            </View>

            <View style={styles.genderOption}>
              <Text
                style={styles.genderText}
                onPress={() => setSelectedGender(selectedGender === 'non-binary' ? null : 'non-binary')}
              >
                Non-binary
              </Text>
              <Pressable
                style={styles.radioButton}
                onPress={() => setSelectedGender(selectedGender === 'non-binary' ? null : 'non-binary')}
              >
                <View style={[styles.radioButtonInner, selectedGender === 'non-binary' && styles.radioButtonSelected]} />
              </Pressable>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.checkboxContainer}>
              <Checkbox
                status={isVisible ? 'checked' : 'unchecked'}
                onPress={() => setIsVisible(!isVisible)}
              />
              <Text
                style={styles.checkboxText}
                onPress={() => setIsVisible(!isVisible)}>
                Visible on my profile
              </Text>
            </View>
          </View>
        </View>
      </View>

      <CustomButton
        label="Submit"
        onPress={() => navigation.navigate('Intention')}
      />
    </SafeAreaView>
  );
};

export default DatingTypeScreen;

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
    marginBottom: 15,
  },
  infoDescription: {
    fontSize: 14,
    marginBottom: 25,
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
  genderContainer: {
    width: '100%',
  },
  genderOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  genderText: {
    fontSize: 16,
    fontWeight: '500',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  radioButtonSelected: {
    backgroundColor: '#000',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#dcdbdb',
    marginVertical: 12,
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
