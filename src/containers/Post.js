import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import {
    graphql,
    createFragmentContainer,
} from 'react-relay'

class Post extends React.Component {

    render() {
        const jogador = this.props.item;

        return (
            <TouchableOpacity onPress={() => { }} >
                <View style={styles.repo}>
                    <View style={styles.repoInfo}>
                        <Text style={styles.repoTitle}>Nome: {jogador.fullName}</Text>
                        <Text style={styles.repoplayerId}>Status: {jogador.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default createFragmentContainer(
    Post,
    graphql`
        fragment Post_item on Player{
            lastYear
            rookieYear
            fullName
            lastName
            firstName
            profileUrl
            status
            team
            playerId
        }
    `,
);

const styles = StyleSheet.create({

    repo: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        borderRadius: 5,
    },

    repoInfo: {
        alignItems: 'center',
    },

    repoTitle: {
        fontWeight: 'bold',
        color: '#333',
    },

    repoplayerId: {
        fontSize: 12,
        color: '#999',
    }
})