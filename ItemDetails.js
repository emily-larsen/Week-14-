import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, Button, Text, View } from 'react-native';

  

const ItemDetails = ({ navigation, route }) => {

  const [value, onChangeText] = React.useState('Enter Text');
  const { image } = route.params;

  const goBackToList = () => {
    navigation.navigate('Ems Photos');
  }

  return (
    <View style={styles.container}>
      
      <Image style={styles.image}
             source={image} />
      <Text style={styles.title}>
		  {}
      </Text>

      <Text>
		    Enter Name:
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g Emily Larsen'
  />

  <Text>
		    Enter Date:
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g 11/11/2011'/>

    <Text>
		    Enter Location:
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g  41Â°2412.2"N 2Â°E'/>

  <Text>
		    Notes/Comments:
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g Nice Photo'/>

    
  <Button title="Save"
              onPress={goBackToList} />

    <Button title="Go Back"
              onPress={goBackToList} />

      <StatusBar style="auto" />

    </View>
  );
}

export default ItemDetails;






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  image: {
    width: '85%',
    height: 350,
    resizeMode: 'cover',
    marginBottom: 5,
    marginTop: 13,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,

  }
});
