import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

export default class SearchScreen extends React.Component<
  NavigationScreenProps<unknown>
> {
  render() {
    return (
      <View>
        <Text>Search</Text>
        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate('SearchResult')}
        />
      </View>
    );
  }
}
