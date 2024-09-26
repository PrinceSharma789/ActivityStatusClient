import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../Constants/Colors';

const CustomButton = props => {
  const { label = 'Button' } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonBackground,
  },
  label: {
    color: Colors.buttonLabel,
  },
});
