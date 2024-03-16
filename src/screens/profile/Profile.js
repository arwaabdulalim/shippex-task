import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useUserStore } from '../../config/zustand/userStore';
import MainButton from '../../components/mainButton/MainButton';

const Profile = () => {
  const { setIsSignedIn } = useUserStore();
  const handleLogout = () => {
    setIsSignedIn(false);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MainButton title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Profile;
