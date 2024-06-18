import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ placeholder, onSearch, onFilter }) => {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity onPress={onFilter} style={styles.optionsIconContainer}>
        <Icon name="options-outline" size={24} color="#A9A9A9" />
      </TouchableOpacity>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A9A9A9"
          onSubmitEditing={onSearch}
        />
        <TouchableOpacity onPress={onSearch} style={styles.iconContainer}>
          <Icon name="search-outline" size={24} color="#A9A9A9" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex:1
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#A9A9A9',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor:'#FFFFFF',
    flex: 1,
  },
  optionsIconContainer: {
    marginRight: 10,
    padding: 15,
    backgroundColor:'#FFFFFF',
    borderRadius:16,
  },
  iconContainer: {
    padding: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 10,
  },
});

export default SearchBar;
