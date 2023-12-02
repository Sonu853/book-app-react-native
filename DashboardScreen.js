import React, { useState } from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet, FlatList, Image , ScrollView} from 'react-native';
import BookListScreen from './BookListScreen';
import BookSearchScreen from './BookSearchScreen';
import AudioPluginsScreen from './AudioPlugins';
import CategoriesList from './CategoriesList';
import BookDetailScreen from './BookDetailScreen';
import BookRating from './BookRating';

const DashboardScreen = ({ navigation }) => {
  
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuPress = (menuItem) => {
    console.log(`Pressed ${menuItem}`);
    setSelectedMenuItem(menuItem);

  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <TouchableOpacity onPress={() => handleMenuPress('Book List')} style={styles.menuItem}>
          <Text>Book List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Categories List')} style={styles.menuItem}>
          <Text>Categories List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Books Details Screen')} style={styles.menuItem}>
          <Text>Books Details Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Rating & Reviews System')} style={styles.menuItem}>
          <Text>Rating & Reviews System</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Book Search')} style={styles.menuItem}>
          <Text>Book Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Audio Plugins')} style={styles.menuItem}>
          <Text>Audio Plugins</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress('Bookmarks')} style={styles.menuItem}>
          <Text>Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.mainContent}>
      {selectedMenuItem === 'Book List' && <BookListScreen />}
      {selectedMenuItem === 'Categories List' && <CategoriesList />}
      {selectedMenuItem === 'Book Search' && <BookSearchScreen />}
      {selectedMenuItem === 'Audio Plugins' && <AudioPluginsScreen />}
      {selectedMenuItem === 'Books Details Screen' && <BookDetailScreen />}
      {selectedMenuItem === 'Rating & Reviews System' && <BookRating />}
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
  },
  sidebar: {
    width: 200,
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRightWidth: 1,
    borderColor: '#ccc',
   
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  menuItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  bookItem: {
    flex: 1,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    width: 350,
    height: 310, 
  },
  bookImage: {
    width: 310,
    height: 230,
    marginBottom: 8,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
});

export default DashboardScreen;