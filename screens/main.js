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
import { CoinRow } from './components/CoinRow'

export class MainPage extends Component<{}> {
    constructor(props) {
        super(props)

        this.state = {
            coins: [{
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
                coinQty: 1000,
                iconPath: require('../assets/icons/ada.png')
            },
            {
                coin: 'XVG',
                sellAccount: {
                    platform: 'Binance',
                    sellPrice: 0.00001234
                },
                buyAccount: {
                    platform: 'Bittrex',
                    buyPrice: 0.00001233
                },
                bidask: 0.00000010,
                profit: 0,
                coinQty: 1000,
                iconPath: require('../assets/icons/xvg.png')
            },
            {
                coin: 'XLM',
                sellAccount: {
                    platform: 'Bittrex',
                    sellPrice: 0.00001234
                },
                buyAccount: {
                    platform: 'Binance',
                    buyPrice: 0.00001233
                },
                bidask: 0.00000015,
                profit: 0,
                coinQty: 1000,
                iconPath: require('../assets/icons/xlm.png')
            }]
        }
    }

    componentDidMount() {
        console.log(Config.WEBSOCKET_URL)
        const socket = io(Config.WEBSOCKET_URL, { transports: ['websocket'] })
        socket.on('connect', () => {
            console.log("socket connected")
        })

        socket.on('connect_error', (err) => {
            console.log(err)
        })

        socket.on('disconnect', () => {
            console.log("Disconnected Socket!")
        })
        socket.on('pricejson', (coinInfo) => {
            coinInfo = JSON.parse(coinInfo)

            const index = this.state.coins.findIndex(coin => coin.coin === coinInfo.coin)

            this.state.coins[index].bidask = coinInfo.bidask
            this.state.coins[index].buyAccount = coinInfo.buyAccount
            this.state.coins[index].coinQty = coinInfo.coinQty
            this.state.coins[index].profit = coinInfo.profit
            this.state.coins[index].sellAccount = coinInfo.sellAccount

            this.forceUpdate()
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
                    {
                        this.state.coins.map(coin =>
                            <CoinRow coin={coin} />,
                            <Divider styleName="line" />
                        )
                    }
                </ScrollView>
            </Screen>
        );
    }
}