import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import profileImage from './assets/profile.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const popularPlaces = [
    { id: '1', name: 'Koh Samui', description: 'Thailand', image: 'https://kampatour.com/pic/blog/images/ks1.jpg' },
    { id: '2', name: 'Perth', description: 'Australia', image: 'https://destinationlesstravel.com/wp-content/uploads/2022/08/Cottesloe-Beach-Perth.jpg.webp' },
    { id: '3', name: 'Santorini', description: 'Greece', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9DcB8zPWS3cmvIMXvoszHQIuzsNfs0oZEQ&s' },
    { id: '4', name: 'Boracay', description: 'Philippines', image: 'https://jocyls.com/wp-content/uploads/2023/06/where-is-boracay-located-in-aklan.jpg' },
  ];

  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />
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
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.placeItem}
            onPress={() => navigation.navigate('Details', { place: item })}>
            <Image source={{ uri: item.image }} style={styles.placeImage} />
            <Text style={styles.placeName}>{item.name}</Text>
            <Text style={styles.placeDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="#007BFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="airplane-outline" size={24} color="#000" />
          <Text style={styles.navText}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="bookmark-outline" size={24} color="#000" />
          <Text style={styles.navText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person-outline" size={24} color="#000" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailsScreen = ({ route }) => {
  const { place } = route.params;
  const [numColumns, setNumColumns] = useState(3);
  const [photoSize, setPhotoSize] = useState(0);

  const photos = [
    'https://kampatour.com/pic/blog/images/ks1.jpg',
    'https://kampatour.com/pic/blog/images/ks1.jpg',
    'https://kampatour.com/pic/blog/images/ks1.jpg',
    'https://kampatour.com/pic/blog/images/ks1.jpg',
    'https://kampatour.com/pic/blog/images/ks1.jpg',
    'https://kampatour.com/pic/blog/images/ks1.jpg',
  ];

  useEffect(() => {
    const updateLayout = () => {
      const { width } = Dimensions.get('window');
      const newNumColumns = width > 600 ? 4 : 3; // Use 4 columns for larger screens
      setNumColumns(newNumColumns);
      const newPhotoSize = (width - 40) / newNumColumns; // 40 is total horizontal padding
      setPhotoSize(newPhotoSize);
    };

    updateLayout();
    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  return (
    <ScrollView style={styles.detailsContainer}>
      <Image source={{ uri: place.image }} style={styles.detailsImage} />
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
      <FlatList
        data={photos}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <Image 
            source={{ uri: item }} 
            style={[styles.photoItem, { width: photoSize, height: photoSize }]} 
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.photoList}
      />
      <View style={{ height: 60 }} /> {/* Spacer for navbar */}
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E90ff',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 150,
    alignSelf: 'flex-end',
    margin: 5,
  },
  searchInput: {
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#ECECEC',
    color: '#A9A9A9',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placeItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  placeImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  placeName: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeDescription: {
    textAlign: 'center',
    fontSize: 12,
    color: '#A9A9A9',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsImage: {
    width: '100%',
    height: 200,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  detailsRating: {
    fontSize: 18,
    color: 'gold',
  },
  detailsReview: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#A9A9A9',
  },
  detailsDescription: {
    padding: 10,
    color: '#A9A9A9',
  },
  photosTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  photoList: {
    padding: 5,
  },
  photoItem: {
    margin: 5,
    borderRadius: 8,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
});