import React from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {RNCamera} from 'react-native-camera';
import {Container, Button} from 'native-base';
import cameraStyles from './camera.styles';
import {Routes} from '../../navigation/routes';
import {ResultNavigationParams} from '../result/navigation.params';
import {CameraState} from './camera.state';

export default class CameraScreen extends React.Component<
  NavigationScreenProps<unknown>,
  CameraState
> {
  state: CameraState = {
    captureAlreadyClicked: false,
  };

  private camera: RNCamera | null = null;

  render(): JSX.Element {
    return (
      <Container>
        <RNCamera
          style={[cameraStyles.camera]}
          ref={ref => {
            this.camera = ref;
          }}>
          <Button
            disabled={this.state.captureAlreadyClicked}
            style={[cameraStyles.captureButton]}
            onPress={() => this.captureButtonPress()}></Button>
        </RNCamera>
      </Container>
    );
  }

  private async captureButtonPress(): Promise<void> {
    if (this.camera) {
      this.setState({captureAlreadyClicked: true});

      try {
        const captureResponse = await this.camera.takePictureAsync({
          base64: true,
          doNotSave: true,
          quality: 0.2,
          pauseAfterCapture: true,
        });
        if (captureResponse.base64) {
          this.navigateToResult(captureResponse.base64);
        } else {
          this.navigateToSearch();
        }
      } catch {
        this.navigateToSearch();
      }
    }
  }

  private navigateToResult(base64Image: string): void {
    this.props.navigation.navigate(Routes.Result, {
      isImage: true,
      data: base64Image,
    } as ResultNavigationParams);
  }

  private navigateToSearch(): void {
    // TODO: show toast with information about image capture failure
    this.props.navigation.navigate(Routes.Search);
  }
}
