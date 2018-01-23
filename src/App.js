import React, { Component } from 'react';
import {
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
              <View>
                {props.players.map(item => <Post item={item} />)}
              </View>
            )
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}


