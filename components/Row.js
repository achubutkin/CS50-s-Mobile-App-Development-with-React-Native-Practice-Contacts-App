import * as React from 'react';
import { Text, View } from 'react-native';

const Row = props => (
  <View key={props.key} style={styles.containerItem}>
    <Text style={styles.item}>
      {props.firstName.trim()} {props.lastName.trim()}
    </Text>
    <Text style={styles.item.birthday}>{props.birthday ? props.birthday.year : ''}</Text>
  </View>
);

const styles = {
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'powderblue'
  },
  item: {
    flex: 'auto',
    birthday: {
      width: 3,
      backgroundColor: 'skyblue'
    }
  }
};

export default Row;