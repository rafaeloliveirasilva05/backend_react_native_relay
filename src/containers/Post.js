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

        const player = this.props.player;

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <Text>{player.nome}teste</Text>
                </ScrollView>
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

