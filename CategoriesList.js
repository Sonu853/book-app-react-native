import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { dataObjects } from './DataObjects';

const BookApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayBooks = (category) => {
    setSelectedCategory(category);
  };

  const getBooksByCategory = (category) => {
    return dataObjects.filter((book) => book.category === category);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Fiction" onPress={() => displayBooks('Fiction')} />
        <Button title="Comic" onPress={() => displayBooks('Comic')} />
        <Button title="Novel" onPress={() => displayBooks('Novel')} />
      </View>

      <View style={styles.bookListContainer}>
        {selectedCategory && (
          <FlatList
            data={getBooksByCategory(selectedCategory)}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={styles.bookItem}>
                <ImageBackground source={{ uri: item.image }} style={styles.bookImage}>
                  <Text style={styles.bookTitle}>{item.title}</Text>
                </ImageBackground>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  bookListContainer: {
    flex: 1,
    width: '100%',
  },
  bookItem: {
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  bookImage: {
    width: 200,
    height: 300,
    justifyContent: 'flex-end',
  },
  bookTitle: {
    color: 'white',
    fontSize: 16,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default BookApp;
