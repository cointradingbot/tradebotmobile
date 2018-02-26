import React, { Component } from 'react';
import io from 'socket.io-client'
import Config from 'react-native-config'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Divider, Subtitle, Caption, Image, Screen, ScrollView, Heading, NavigationBar, Icon, Title, Button, Row } from '@shoutem/ui'
import { WSAEPROVIDERFAILEDINIT } from 'constants';

export class MainPage extends Component<{}> {
    constructor(props) {
        super(props)

        this.state = {
            coin: 'ADA',
            sellAccount: {
                platform: 'Binance',
                sellPrice: 0.00001234
            },
            buyAccount: {
                platform: 'Bittrex',
                buyPrice: 0.00001233
            },
            bidask: 0.00000001,
            profit: 0,
            coinQty: 1000
        }
    }

    componentDidMount() {
        console.log(Config.WEBSOCKET_URL)
        const socket = io(Config.WEBSOCKET_URL, {transports: ['websocket']})
        socket.on('connect', () => {
            console.log("socket connected")
            })
      
          socket.on('connect_error', (err) => {
            console.log(err)
          })
      
          socket.on('disconnect', () => {
            console.log("Disconnected Socket!")
          })
          socket.on('pricejson', (msg) => {
              this.setState(() => { return JSON.parse(msg) })
          })
    }
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
                            <Subtitle>{`${this.state.buyAccount.platform} > ${this.state.sellAccount.platform}`}</Subtitle>
                            <View styleName="horizontal stretch space-between">
                                <Text styleName="multiline">{`Bid-Ask: ${this.state.bidask}`}</Text>
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