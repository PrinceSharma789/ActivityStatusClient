import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Constants/Colors';

const IconTextRow = props => {
  const { iconName = '', text = '', icon } = props;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {!!iconName && (
        <Ionicons name={iconName} style={{ color: Colors.inactive }} />
      )}
      {!!icon &&
         icon 
      }
      <Text style={{ color: Colors.inactive, marginLeft: 5, fontSize: 12 }}>
        {text}
      </Text>
    </View>
  );
};

export default IconTextRow;
