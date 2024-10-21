import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import profileImage from './assets/profile.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles'; 

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const popularPlaces = [
    { id: '1', name: 'Koh Samui', description: 'Thailand', image: 'https://kampatour.com/pic/blog/images/ks1.jpg' },
    { id: '2', name: 'Perth', description: 'Australia', image: 'https://destinationlesstravel.com/wp-content/uploads/2022/08/Cottesloe-Beach-Perth.jpg.webp' },
    { id: '3', name: 'Santorini', description: 'Greece', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9DcB8zPWS3cmvIMXvoszHQIuzsNfs0oZEQ&s' },
    { id: '4', name: 'Boracay', description: 'Philippines', image: 'https://jocyls.com/wp-content/uploads/2023/06/where-is-boracay-located-in-aklan.jpg' },
  ];

  const renderPlaceItem = ({ item }) => (
    <TouchableOpacity
      style={styles.placeItem}
      onPress={() => navigation.navigate('Details', { place: item })}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.placeImage}
        resizeMode="cover"
      />
      <View style={styles.placeTextContainer}>
        <Text style={styles.placeName}>{item.name}</Text>
        <Text style={styles.placeDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image 
        source={profileImage} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Find your perfect place to travel.</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
      />
      <Text style={styles.subTitle}>Most popular places</Text>
      <FlatList
        data={popularPlaces}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderPlaceItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.navbar}>
        {[
          { name: 'home-outline', label: 'Home', active: true },
          { name: 'airplane-outline', label: 'Trips' },
          { name: 'bookmark-outline', label: 'Bookmark' },
          { name: 'person-outline', label: 'Profile' }
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navButton}>
            <Ionicons 
              name={item.name} 
              size={24} 
              color={item.active ? '#007BFF' : '#000'} 
            />
            <Text style={[styles.navText, item.active && styles.activeNavText]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const DetailsScreen = ({ route }) => {
  const { place } = route.params;
  const [numColumns, setNumColumns] = useState(3);
  const [photoSize, setPhotoSize] = useState(0);

  const photos = Array(6).fill(place.image);

  useEffect(() => {
    const updateLayout = () => {
      const { width } = Dimensions.get('window');
      const newNumColumns = width > 600 ? 4 : 3;
      setNumColumns(newNumColumns);
      setPhotoSize((width - 40) / newNumColumns);
    };

    updateLayout();
    const subscription = Dimensions.addEventListener('change', updateLayout);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <ScrollView style={styles.detailsContainer}>
      <Image 
        source={{ uri: place.image }} 
        style={styles.detailsImage}
        resizeMode="cover"
      />
      <View style={styles.detailsHeader}>
        <Text style={styles.detailsTitle}>{place.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.detailsRating}>★★★★☆</Text>
          <Text style={styles.detailsReview}>24 reviews</Text>
        </View>
      </View>
      <View style={styles.locationContainer}>
        <Ionicons name="map-outline" size={16} color="#A9A9A9" />
        <Text style={styles.locationText}>{place.description}</Text>
      </View>
      <Text style={styles.detailsDescription}>
        {place.name} is one of the Cyclades islands in the Aegean Sea. It was
        devastated by a volcanic eruption in the 16th century BC, forever shaping
        its rugged landscape.
      </Text>
      <Text style={styles.photosTitle}>PHOTOS</Text>
      <View style={styles.photoGrid}>
        {photos.map((photo, index) => (
          <Image 
            key={index}
            source={{ uri: photo }} 
            style={[styles.photoItem, { width: photoSize, height: photoSize }]}
            resizeMode="cover"
          />
        ))}
      </View>
      <View style={styles.spacer} />
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
