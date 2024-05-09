import { Slot } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

export default function HomeLayout() {
  return (
   <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <Header title='Header' />
      <Slot />
      <Text>testo</Text>
    </SafeAreaView>
    </SafeAreaProvider> 
  );
}