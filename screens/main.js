import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Divider, Subtitle, Caption, Image, Screen, ScrollView, Heading, NavigationBar, Icon, Title, Button, Row } from '@shoutem/ui'

export class MainPage extends Component<{}> {
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
                <ScrollView style={{ marginTop: 70 }}>
                    <Row>
                        <Image styleName="small-avatar top" source={require('../assets/icons/ada.png')} />
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
                        <Image styleName="small-avatar top" source={require('../assets/icons/xlm.png')} />
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
                        <Image styleName="small-avatar top" source={require('../assets/icons/xvg.png')} />
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