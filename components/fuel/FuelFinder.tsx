import React, {Component} from 'react';
import {Button, Col, Content, Grid, Row, Text, View} from "native-base";
import {Style} from './FuelFinder.style'
import {FuelData, FuelFetcher} from "./FuelFetcher";


type State = {
    finder: FuelFetcher,
    data: FuelData
}

class FuelFinder extends Component<{}, State> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            finder: new FuelFetcher(),
            data: null
        }
    }

    componentDidMount(): void {
        this.reloadData();
    }

    render() {
        return (
            <Content>
                <View style={Style.main}>
                    <Text>A</Text>
                    <Button onPress={this.reloadData}
                            warning><Text>Reload</Text></Button>
                    <Text>A</Text>
                </View>
            </Content>
        );
    }

    private reloadData = async () => {

        let data = await this.state.finder.update();
        console.log("New data", data);
        this.setState(prev => {
            return {
                ...prev,
                data: data
            }
        }, () => console.log("New state", this.state))
    }

}

export default FuelFinder;
