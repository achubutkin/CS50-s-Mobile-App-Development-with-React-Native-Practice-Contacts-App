import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { Constants } from 'expo';
import { Contacts } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import BottomSheet from 'react-native-bottomsheet';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      contacts: [],
      error: null,
    };
  }
  componentDidMount() {}
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
