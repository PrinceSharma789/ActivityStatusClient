import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabs } from './Routes/Bottom';
import Colors from './Constants/Colors';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: Colors.inactive,
          tabBarLabelStyle: { fontSize: 13 },
          tabBarStyle: { height: 60, paddingVertical: 5, paddingBottom: 5 },
        }}
      >
        {BottomTabs.map(item => {
          return (
            <BottomTab.Screen
              name={item.name}
              component={item.component}
              options={{
                tabBarIcon: () => item.icon,
                tabBarLabel: item.name === 'Plus' ? () => null : item.name,
              }}
              key={item.id}
            />
          );
        })}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
