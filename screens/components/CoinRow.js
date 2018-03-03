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

export class CoinRow extends Component<{}> {
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
    render() {
        return (
            <Row>
                <Image styleName="small-avatar top" source={require('../../assets/icons/ada.png')} />
                <View styleName="vertical">
                    <Subtitle>{`${this.state.buyAccount.platform} > ${this.state.sellAccount.platform}`}</Subtitle>
                    <View styleName="horizontal stretch space-between">
                        <Text styleName="multiline">{`Bid-Ask: ${this.state.bidask}`}</Text>
                        <Caption>20 minutes ago</Caption>
                    </View>
                </View>
            </Row>
        );
    }
}