import React from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {RNCamera} from 'react-native-camera';
import {Container, Button, Icon} from 'native-base';
import cameraStyles from './camera.styles';
import {TouchableOpacity} from 'react-native';

export default class CameraScreen extends React.Component<
  NavigationScreenProps<unknown>
> {
  render(): JSX.Element {
    return (
      <Container>
        <RNCamera style={[cameraStyles.camera]}>
          <Button
            style={[cameraStyles.captureButton]}
            onPress={() => this.captureButtonPress()}></Button>
        </RNCamera>
      </Container>
    );
  }

  private captureButtonPress() {
    console.warn('Photo taken');
  }
}
