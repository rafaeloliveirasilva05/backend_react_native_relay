import React, { Component } from 'react';

import {
    Text,
    View,
} from 'react-native';

import {
    graphql,
    createFragmentContainer,
} from 'react-relay'


class Post extends React.Component {
    render() {

        const item = this.props.player;

        return (
            <View>
                <Text>oioi</Text>
                <Text>{item.nome}</Text>
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



