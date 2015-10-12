'use strict';

var React = require('react-native');
var { AppRegistry, View, StyleSheet, Text} = React;

var MyApp = React.createClass({

  getInitialState() {
    return {count: 0};
  },

  incrementCount() {
    this.setState({count: this.state.count + 1});
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          My first React Native app
        </Text>
        <Text onPress={this.incrementCount} style={styles.counter}>
          {this.state.count} clicks
        </Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:  'center',
    paddingTop: 200,
  },
  welcome: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'gold',
    textAlign: 'center',
    height: 50,
    width: 180,
  },
  counter: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'orange',
    textAlign: 'center',
    height: 50,
    width: 180,
  },
});

AppRegistry.registerComponent('main', () => MyApp);
