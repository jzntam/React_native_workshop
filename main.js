'use strict';

var React = require('react-native');
var { AppRegistry, View, StyleSheet, Image} = React;

var MyApp = React.createClass({
  render() {
    return (
      <View style={[styles.base, {paddingTop: 100}]}>
        <Image source={{uri: 'http://i.imgur.com/bG99o3V.gif'}}
          style={{width: 300, height: 300}}
          resizeMode="cover" />
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
});

AppRegistry.registerComponent('main', () => MyApp);
