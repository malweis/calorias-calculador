import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const imageUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyF65HDyngaSF0VwlRoY5oVgLTiLUcUnDQucFD2Ky5zg&s';
    const fallbackText = 'AB';

    return (
        <View style={styles.mainHeader}>
            <View>
                <Text>{title}</Text>
                <Text>{title}</Text>
            </View>
            <View style={styles.avatar}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <Text style={{ fontSize: 40, color: '#212121' }}>{fallbackText}</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainHeader: {
        padding: 10,
        width: '100%',
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    avatar: {
        borderColor: 'black',
        borderWidth: 2,
        width: 74,
        height: 74,
        
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Header;