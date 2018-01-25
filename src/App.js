import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  View

} from 'react-native';

import {
  graphql,
  QueryRenderer,
} from 'react-relay'

import environment from './environment'
import Post from './containers/Post'

export default class App extends Component<{}> {

  render() {
    return (

      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
              
            players{
              ... Post_item
            }
          }
        `}

        render={({ error, props }) => {
          if (error) {
            return <Text>{error.message}</Text>;
          } else if (props) {
            return (
              <View style={styles.container}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>Jogadores do Chicago Bulls</Text>
                </View>

                <ScrollView contentContainerStyle={styles.repoList}>
                  {props.players.map(item => <Post item={item} />)}
                </ScrollView>

              </View>
            )
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 10,
  },
})