import React, {Component} from 'react';
import {Container, Content, Footer, H1, Header, Left} from "native-base";

class AppLoading extends Component {
    render() {
        return (

                <Content padder>
                    <Left>
                        <H1>App is loading please wait</H1>
                    </Left>
                </Content>



        );
    }
}

export default AppLoading;
