/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

var React = require('react-native');
var { AppRegistry, View, StyleSheet} = React;

var MyApp = React.createClass({
  render() {
    return (
      <View style={styles.base}>
        <View style={[styles.child, {flex: 1}]} />
        <View style={[styles.child, {flex: 8, paddingTop: 100, flexDirection: 'row'}]}>
          <View style={[styles.innerChild, {flex: 2}, styles.green]} />
          <View style={[styles.innerChild, {flex: 8}, styles.blue]} />
        </View>
        <View style={[styles.child, {flex: 1}]} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:  'center',
    //
  },
  child: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  innerChild: {
    borderWidth: 2,
    borderColor: 'gold',
    height: 200,
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
});

AppRegistry.registerComponent('main', () => MyApp);
