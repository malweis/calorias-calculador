import { useLocalSearchParams} from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Home = () => {
    const { username } = useLocalSearchParams();
    return (
        <View>
            <Text>Welcome to the Home component aa{username}aa !</Text>
        </View>
    );
};

export default Home;