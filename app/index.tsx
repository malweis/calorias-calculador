import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

const App = () => {

    const navigateWithParams = () => {
        
        router.navigate({pathname: "Home",
        params: {
          username: 'john dss'
        }});
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'blue' }}>
            <Pressable onPress={navigateWithParams}>
            <Text>Welcome to Expo React Native!</Text>
            </Pressable>
        </View>
    );
};

export default App;