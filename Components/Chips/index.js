import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../Constants/Colors';

const Chips = props => {
  const { chips = [], onSelect = () => {}, ...restProps } = props;
  const [active, setActive] = useState(0);
  console.log('🚀 ~ Chips ~ active:', active);
  const handleTabPress = (item, index) => {
    console.log('>>>>>8', index);
    setActive(index);
    onSelect(item, index);
  };
  return (
    <View>
      <ScrollView
        contentContainerStyle={[styles.chipContainer, restProps?.chipContainer]}
        {...(restProps?.scroll ? restProps.scroll : {})}
      >
        {chips.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.chipItem,
                restProps?.chipItem,
                index == active ? { backgroundColor: Colors.active } : {},
              ]}
              onPress={() => handleTabPress(item, index)}
            >
              <Text
                style={[
                  styles.chipLabel,
                  restProps?.chipLabel,
                  index == active ? { color: 'white' } : {},
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Chips;

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  chipItem: {
    borderColor: Colors.active,
    borderWidth: 1,
    borderRadius: 4,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
  },
  chipLabel: {
    color: Colors.active,
    fontWeight: 'bold',
  },
});
