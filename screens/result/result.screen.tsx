import React from 'react';
import {Container, Text} from 'native-base';
import {NavigationScreenProps} from 'react-navigation';

export default class ResultScreen extends React.Component<
  NavigationScreenProps<unknown>
> {
  render(): JSX.Element {
    return (
      <Container>
        <Text>Search Result</Text>
      </Container>
    );
  }
}
