import React from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {Container, Text} from 'native-base';

export default class CameraScreen extends React.Component<
  NavigationScreenProps<unknown>
> {
  render(): JSX.Element {
    return (
      <Container>
        <Text>Camera goes here</Text>
      </Container>
    );
  }
}
