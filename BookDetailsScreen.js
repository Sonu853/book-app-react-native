import { View, Text, Image,StyleSheet,Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BookDetailsScreen = ({ route }) => {
    const navigation = useNavigation();
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: book.image }} style={{ width: 200, height: 300 }} />
      <Text style={{ fontWeight: 'bold' }}>Title: {book.title}</Text>
      <Text style={{ fontWeight: 'bold' }}>Author: By {book.author}</Text>
      <Text style={{ fontWeight: 'bold' }}>Category: {book.category}</Text>
      <Text style={{ fontWeight: 'bold' }}>Language: {book.language}</Text>
      <Button
        title="Back to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bookImage: {
      width: 200,
      height: 300,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    author: {
      fontWeight: 'bold',
    },
  });

export default BookDetailsScreen;
