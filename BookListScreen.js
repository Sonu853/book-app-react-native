import React, { useState,createContext, useContext } from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet, FlatList, Image , ScrollView} from 'react-native';
import { dataObjects } from './DataObjects'

const BookListScreen = () => {

  const renderBookItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => {
        // Handle the press event if needed
      }}
    >
      <Image source={{ uri: item.image }} style={styles.bookImage} />
      <Text>{item.title}</Text>
      <Text>By {item.author}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <FlatList
        data={dataObjects}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </ScrollView>
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

  export default BookListScreen;