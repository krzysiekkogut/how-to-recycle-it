import React from 'react';
import {NavigationScreenProps, StackActions} from 'react-navigation';
import {RNCamera} from 'react-native-camera';
import Toast from 'react-native-simple-toast';
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
          quality: 1,
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
    const navAction = StackActions.replace({
      routeName: Routes.Result,
      params: {
        isImage: true,
        data: base64Image,
      } as ResultNavigationParams,
    });
    this.props.navigation.dispatch(navAction);
  }

  private navigateToSearch(): void {
    Toast.show('Could not capture image from camera.');
    const navAction = StackActions.replace({routeName: Routes.Search});
    this.props.navigation.dispatch(navAction);
  }
}
