import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { api } from '../../api';

const MarketPlace = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state for feedback

  const fetchData = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await api.marketplace.getItemsFromMarketPlace();
      setData(response.results); // Assuming data is in response.results
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors appropriately (e.g., display an error message)
    } finally {
      setIsLoading(false); // Set loading state to false after fetching (success or error)
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Card>
      <Card.Title><Text>{item.name || 'Item Title'}</Text></Card.Title>  
      <Card.Image source={{ uri: item.imageUrl || 'https://via.placeholder.com/150' }} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.description || 'Item Description'}</Text>  
      <Text>Price: $<Text>{item.price || 'N/A'}</Text></Text>  
      <Button title="View Details" onPress={() => console.log("test")} />
    </Card>
  );
  

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id || Math.random().toString()} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 200, // Adjust height as needed
    resizeMode: 'cover', // Adjust resize mode (e.g., 'contain')
  },
  cardText: {
    marginBottom: 10,
  },
});

export default MarketPlace;
