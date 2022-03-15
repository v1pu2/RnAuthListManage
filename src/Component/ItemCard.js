import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';

import Colors from '../Theme/Colors';

const ItemCard = ({item, onDelete}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Text style={styles.text}>{item?.value}</Text>
      <Text style={styles.delete} onPress={() => onDelete(item?.id)}>
        Delete
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#eeeeee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 20,
    width: '100%',
  },
  delete: {
    color: Colors.color2,
    fontSize: 10,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  text: {
    fontSize: 14,
    color: Colors.color0,
    flexWrap: 'wrap',
    paddingRight: 25,
  },
});

export default ItemCard;
