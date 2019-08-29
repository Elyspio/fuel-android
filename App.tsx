import React, {Component} from 'react';
import {Button, Container, Content, Footer, Header, Text} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import FuelFinder from "./components/fuel/FuelFinder";
import AppLoading from "./components/AppLoading";


interface State {
    isReady: boolean
}

export default class ContentExample extends Component<{}, State> {


    constructor(props: Readonly<object>) {
        super(props);
        this.state = {
            isReady: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({isReady: true});
    }


    render() {

        const content  = this.state.isReady ?  <FuelFinder/> : <AppLoading/>;

        return (
            <Container>
                <Header/>
                {content}
                <Footer/>
            </Container>
        );
    }
}
