import React from 'react';
import {Container, Text, H1, Grid, Row} from 'native-base';
import {NavigationScreenProps} from 'react-navigation';
import {ResultNavigationParams} from './navigation.params';
import {Image} from 'react-native';

export default class ResultScreen extends React.Component<
  NavigationScreenProps<ResultNavigationParams>
> {
  private navigationParams: ResultNavigationParams;

  constructor(props: NavigationScreenProps<ResultNavigationParams>) {
    super(props);
    this.navigationParams = this.props.navigation.state
      .params as ResultNavigationParams;
  }
  render(): JSX.Element {
    return (
      <Container>
        <Grid>
          <Row size={1}>
            <H1>Search Result</H1>
          </Row>
          <Row size={9}>
            {this.navigationParams.isImage ? (
              <Image
                style={{flex: 1}}
                source={{
                  uri: `data:image/jpeg;base64,${this.navigationParams.data}`,
                }}
              />
            ) : (
              <Text>{this.navigationParams.data}</Text>
            )}
          </Row>
        </Grid>
      </Container>
    );
  }
}
