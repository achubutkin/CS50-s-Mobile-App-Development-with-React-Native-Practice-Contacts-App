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

const Row = props => (
  <View key={props.key}>
    <Text>
      {props.firstName} {props.lastName}
    </Text>
    <Text>{props.birthday ? props.birthday.year : ''}</Text>
  </View>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 'Loading...',
      contacts: [],
      error: null,
    };
  }
  componentDidMount() {
    this.load();
  }
  load() {
    const fields = [
      Contacts.Fields.FirstName,
      Contacts.Fields.LastName,
      Contacts.Fields.Birthday,
    ];

    Contacts.getContactsAsync({
      fields: fields,
    })
      .then(contactResponse => {
        this.setState({
          count: `${contactResponse.data.length} contacts`,
          contacts: contactResponse.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countText}>
          <Text>{this.state.count}</Text>
        </View>
        <ScrollView>
          {this.state.contacts.map(contact => {
            return (
              <Row
                key={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                birthday={contact.birthday}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: Constants.paddingTop,
  },
  countText: {
    fontSize: 28,
    alignItems: 'center',
  },
});
