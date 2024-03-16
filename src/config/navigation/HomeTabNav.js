import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

import colors from '../../themes/colors';
import Shipments from '../../screens/shipments/Shipments';
import Scan from '../../screens/scan/Scan';
import Wallet from '../../screens/wallet/Wallet';
import Profile from '../../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const ICONS = {
  Shipments: {
    inactive: require('../../assets/images/shipment.png'),
    active: require('../../assets/images/tintedShipment.png'),
  },
  Scan: {
    inactive: require('../../assets/images/scan.png'),
    active: require('../../assets/images/tintedScan.png'),
  },
  Wallet: {
    inactive: require('../../assets/images/wallet.png'),
    active: require('../../assets/images/tintedWallet.png'),
  },
  Profile: {
    inactive: require('../../assets/images/profile.png'),
    active: require('../../assets/images/tintedProfile.png'),
  },
};

const HomeTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // headerStyle: {
        //  backgroundColor: colors.primary,
        // },
        // headerTintColor: colors.white,
        //  headerTitleAlign: 'center',
        //  headerTitleStyle: {
        //    fontWeight: 'bold',
        //  },
        tabBarIcon: ({focused}) => {
          const iconName = focused
            ? ICONS[route.name].active
            : ICONS[route.name].inactive;
          return (
            <Image
              resizeMode="contain"
              source={iconName}
              style={{height: 25, width: 30}}
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkgrey,
      })}>
      <Tab.Screen
        name="Shipments"
        component={Shipments}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeTabNav;
