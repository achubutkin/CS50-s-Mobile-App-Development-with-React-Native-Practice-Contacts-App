import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Row = props => (
  <View style={styles.containerItem}>
    <Text style={styles.item}>
      {props.firstName} {props.lastName}
    </Text>
    <Text style={styles.birthday}>
      {props.birthday ? props.birthday.year : ''}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18,
    height: 68,
    backgroundColor: 'powderblue',
    borderBottomColor: '#cecece',
    borderStyle: 'solid',
  },
  item: {
    flex: 'auto',
    fontWeight: 600,
    padding: 10,
  },
  birthday: {
    flex: 'auto',
    padding: 10,
  },
});

export default Row;
