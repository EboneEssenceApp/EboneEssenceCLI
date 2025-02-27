import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({
  label,
  onPress,
  backgroundColor = '#000',
  textColor = '#fff',
  width = '70%',
  height,
  style,
  textStyle,
}) => {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor,
          width,
          height,
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          {
            color: textColor,
          },
          textStyle,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignSelf: 'center',
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton; 