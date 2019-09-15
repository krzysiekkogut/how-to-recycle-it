import React from 'react';
import {
  Container,
  Row,
  Grid,
  H1,
  Text,
  Button,
  Input,
  Item,
  Icon,
  H2,
} from 'native-base';
import {NavigationScreenProps} from 'react-navigation';
import {Routes} from '../../navigation/routes';
import styles from './search.screen.styles';

export default class SearchScreen extends React.Component<
  NavigationScreenProps<unknown>
> {
  private searchPhrase: string = '';

  onChangeSearchPhrase(searchPhrase: string): void {
    this.searchPhrase = searchPhrase;
  }

  render(): JSX.Element {
    return (
      <Container style={[styles.container]}>
        <Grid>
          <Row size={1} style={[styles.centerJustify, styles.centerAlign]}>
            <H1 style={[styles.title]}>How to recycle it?</H1>
          </Row>
          <Row size={5} style={[styles.centerJustify, styles.centerAlign]}>
            <Button
              rounded
              large
              icon
              style={[styles.cameraButton, styles.centerJustify]}
              onPress={() => this.navigateToCamera()}>
              <Icon
                style={[styles.cameraButtonIcon]}
                name="camera-retro"
                type="FontAwesome"
              />
            </Button>
          </Row>
          <Row size={1} style={[styles.centerJustify, styles.centerAlign]}>
            <H2>take a picture or name it</H2>
          </Row>
          <Row size={1} style={[styles.centerJustify, styles.centerAlign]}>
            <Item>
              <Icon name="search" type="FontAwesome" />
              <Input
                placeholder="E.g. plastic bottle, paper bag..."
                value={this.searchPhrase}
                onChangeText={text => this.onChangeSearchPhrase(text)}
              />
            </Item>
          </Row>
          <Row size={1} style={[styles.centerJustify, styles.centerAlign]}>
            <Button onPress={() => this.navigateToResult()}>
              <Text>Search</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    );
  }

  private navigateToResult(): void {
    this.props.navigation.navigate(Routes.Result);
  }

  private navigateToCamera(): void {
    this.props.navigation.navigate(Routes.Camera);
  }
}
