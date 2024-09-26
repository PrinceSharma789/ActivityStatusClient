import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Chips from '../../Components/Chips';
import IconTextRow from '../../Components/IconTextRow';
import Colors from '../../Constants/Colors';
import { Entypo, AntDesign } from '@expo/vector-icons';
import CustomButton from '../../Components/CustomButton';
import { baseUrl } from '../../Config';

const Activity = props => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    id: 0,
    name: 'Upcomming',
    status: 'upcoming',
  });
  console.log('🚀 ~ Activity ~ activityData:', data);

  const fetchActivities = async () => {
    try {
      const queryParams = new URLSearchParams({
        status: filter.status,
      });
      const response = await fetch(
        `${baseUrl}/activities?${queryParams.toString()}`,
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      console.log(data); // Handle your data
      setData(data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [filter]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItemImage}>
          <Image
            source={{ uri: item.image }}
            style={{ height: '100%', width: '100%', borderRadius: 4 }}
          />
        </View>
        <View style={styles.listItemDetail}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <IconTextRow iconName={'time'} text={item.time} />
          <IconTextRow
            icon={<AntDesign name="user" style={{ color: Colors.inactive }} />}
            text={item.username}
          />
          <IconTextRow iconName={'wallet'} text={item.price} />
          <IconTextRow
            icon={
              <Entypo
                name="circular-graph"
                style={{ color: Colors.inactive }}
              />
            }
            text={`${item.capacity}/${item.totalCapacity}`}
          />
          <CustomButton label="Cancel" />
        </View>
      </View>
    );
  };
  const tabs = useMemo(() => {
    return [
      {
        id: 0,
        name: 'Upcoming',
        status: 'upcoming',
      },
      {
        id: 1,
        name: 'Past',
        status: 'past',
      },
    ];
  }, []);

  const dates = useMemo(() => {
    let date = [];
    for (let i = 0; i < 14; i++) {
      date.push({
        id: i,
        name: moment().add(i, 'day').format('ddd, DD'),
      });
    }
    return date;
  }, []);

  return (
    <View style={styles.container}>
      <Chips
        chips={tabs}
        onSelect={item => {
          setFilter(item);
        }}
      />
      {filter.name == 'Upcoming' && (
        <Chips
          chips={dates}
          chipItem={styles.chipItem}
          scroll={{ horizontal: true }}
        />
      )}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
    flex: 1,
  },
  chipItem: {
    width: 100,
    marginRight: 10,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  list: {
    marginTop: 20,
  },
  listItemContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    height: 150,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  listItemImage: {
    flex: 1,
  },
  listItemDetail: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'space-between',
  },
});
