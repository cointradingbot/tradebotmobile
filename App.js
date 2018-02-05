/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Divider, Subtitle, Caption, Image, Screen, ScrollView, Heading, NavigationBar, Icon, Title, Button, Row } from '@shoutem/ui'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <Screen>
        <NavigationBar
        leftComponent={<Icon name="sidebar" />}
        centerComponent={<Title>TRADE BOT</Title>}
        rightComponent={(
          <Button>
            <Icon name="down-arrow" />
          </Button>
        )}
        />
        <ScrollView style = {{marginTop:70}}>
          <Row>
            <Image styleName="small-avatar top" source={require('./assets/icons/ada.png')} />
            <View styleName="vertical">
              <Subtitle>BITTREX > BINANCE</Subtitle>
              <View styleName="horizontal stretch space-between">
                <Text styleName="multiline">Bid-Ask: 0.00001234</Text>
                <Caption>20 minutes ago</Caption>
              </View>
            </View>
          </Row>
          <Divider styleName="line" />
          <Row>
            <Image styleName="small-avatar top" source={require('./assets/icons/xlm.png')} />
            <View styleName="vertical">
              <Subtitle>BITTREX > BINANCE</Subtitle>
              <View styleName="horizontal stretch space-between">
                <Text styleName="multiline">Bid-Ask: 0.00001234</Text>
                <Caption>20 minutes ago</Caption>
              </View>
            </View>
          </Row>
          <Divider styleName="line" />
          <Row>
            <Image styleName="small-avatar top" source={require('./assets/icons/xvg.png')} />
            <View styleName="vertical">
              <Subtitle>BITTREX > BINANCE</Subtitle>
              <View styleName="horizontal stretch space-between">
                <Text styleName="multiline">Bid-Ask: 0.00001234</Text>
                <Caption>20 minutes ago</Caption>
              </View>
            </View>
          </Row>
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
