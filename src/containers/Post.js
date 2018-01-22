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
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    {this.props.players.map(player => (

                        <Text>{player.fullName}teste</Text>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

export default createFragmentContainer(
    Post,
    graphql`
        fragment Post_item on Player @relay(plural: true){
            fullName
        }
    `,
);