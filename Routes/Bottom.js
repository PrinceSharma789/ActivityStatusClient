import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import Activity from '../Screens/Activity';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Wallet from '../Screens/Wallet';

export const BottomTabs = [
  {
    id: 0,
    name: 'Home',
    component: Home,
    icon: <Ionicons name="home" size={24} />,
  },
  {
    id: 1,
    name: 'Wallet',
    component: Wallet,
    icon: <Ionicons name="wallet" size={24} />,
  },
  {
    id: 2,
    name: 'Plus',
    component: Wallet,
    icon: (
      <AntDesign
        name="pluscircle"
        size={50}
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 50,
          bottom: 15,
        }}
      />
    ),
    options: { tabBarShowLabel: false },
  },
  {
    id: 3,
    name: 'Activity',
    component: Activity,
    icon: <Feather name="activity" size={24} />,
  },
  {
    id: 4,
    name: 'Profile',
    component: Profile,
    icon: <AntDesign name="user" size={24} />,
  },
];
