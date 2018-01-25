import React, { Component } from 'react';

import {
    Text,
    View,
    ScrollView,
} from 'react-native';

import {
    graphql,
    createFragmentContainer,
} from 'react-relay'

class Post extends React.Component {
    render() {

        const jogador = this.props.item;

        return (
            <View>
                <Text>{jogador.fullName}</Text>
            </View>
        )
    }
}

export default createFragmentContainer(
    Post,
    graphql`
        fragment Post_item on Player{
            fullName
        }
    `,
);