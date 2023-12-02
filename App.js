import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DashboardScreen from './DashboardScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import BookDetailScreen from './BookDetailScreen';
import BookDetailsScreen from './BookDetailsScreen';
import BookRating1 from './BookRating1';
import CategoriesList from './CategoriesList';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {

  const [initialRoute, setInitialRoute] = useState('SignUp');

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
        <Stack.Screen name="BookRating11" component={BookRating1} />
        <Stack.Screen name="CategoriesList" component={CategoriesList} />
        
      </Stack.Navigator>
    </NavigationContainer>
    
   
    </>
  );
};

export default App;
