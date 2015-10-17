/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicatorIOS,
  ScrollView,
  Animated
} = React;

var MyApp = React.createClass({

  getInitialState() {
    return { entrance: new Animated.Value(0) };
  },

  componentDidMount(){
    Animated.spring(this.state.entrance, {toValue: 1}).start();
  },

  render(){
    let opacity = this.state.entrance;
    let rotate = this.state.entrance.interpolate({
      inputRange: [0,1],
      outputRange: ['-180deg', '0deg']
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { opacity, transform: [{rotate}] } ]} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:  'center',
    paddingTop: 200,
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: 'gold'
  },
});

AppRegistry.registerComponent('main', () => MyApp);
