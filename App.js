import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Root from './src/config/navigation/Root';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Splash from './src/screens/splash/Splash';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App: () => Node = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
          <Root />
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
