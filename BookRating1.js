import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookRating1 = ({ route }) => {
  const navigation = useNavigation();
  const { book } = route.params;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const postComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.image }} style={styles.bookImage} />
      <Text style={styles.title}>Title: {book.title}</Text>
      <Text style={styles.rating}>Rating: {book.rating}</Text>
      <Text style={styles.review}>Review: {book.review}</Text>
      {comments.map((commentText, index) => (
        <Text key={index} style={styles.commentText}>
         Sonu: {commentText}
        </Text>
      ))}
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Enter your comment"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <Button title="Post Comment" onPress={postComment} />
      </View>

      

      <Button
        title="Back to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
  rating: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  review: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 8,
  },
  commentText: {
    marginVertical: 5,
    fontWeight: 'bold',
  },
});

export default BookRating1;
