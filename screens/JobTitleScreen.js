import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import {getStatusBarStyle, layoutContainer} from '../utils/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const JobTitleScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, getStatusBarStyle()]}>
      <View style={layoutContainer}>
        <View style={styles.header}>
          <BackButton />
        </View>

        <View style={styles.imageAndIconContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.iconContainer}>
            <MaterialIcons name="business-center" size={26} color="black" />
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
          <Text style={styles.title}>What's your job title?</Text>
          <TextInput
            style={styles.input}
            placeholder="Job Title (required)"
            placeholderTextColor="#afaeae"
            autoFocus
            // value={name}
            // onChangeText={setName}
          />
        </View>

      </View>
        <CustomButton
          label="Submit"
          onPress={() => navigation.navigate('Hometown')}
        />
    </SafeAreaView>
  );
};

export default JobTitleScreen;

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
});
