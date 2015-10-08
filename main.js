'use strict';

var React = require('react-native');
var { AppRegistry, View, StyleSheet} = React;

var MyApp = React.createClass({
  render() {
    return (
      <View style={styles.base}>
        <View style={[styles.child, {flex: 3}]} />
        <View style={[styles.child, {flex: 7}]} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:  'center',
  },
  child: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'orange',
  },
});

AppRegistry.registerComponent('main', () => MyApp);
