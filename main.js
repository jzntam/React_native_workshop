
'use strict';

var React = require('react-native');
var { AppRegistry, View, StyleSheet, Text, Image, ActivityIndicatorIOS} = React;

var MyApp = React.createClass({

  getInitialState() {
    return {person: null};
  },

  componentDidMount() {
    fetch('https://swapi.co/api/people/1').
      then((result) => result.json()).
      then((person) => this.setState({person}));
  },

  render() {
    let { person } = this.state;
    return (
      <View style={styles.container}>
        { person ? <Text>{person.name}</Text> :
                   <ActivityIndicatorIOS size="large" color="blue"/> }
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

AppRegistry.registerComponent('main', () => MyApp);
