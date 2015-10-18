'use strict';

var React = require('react-native');
var _ = require('underscore');

var { ActivityIndicatorIOS, Text, Navigator, TouchableHighlight, AppRegistry, ListView, View, StyleSheet } = React;

var StarWarsApp = React.createClass({
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{position: 'absolute', top: 0, left: 0, height: 200, width: 200, backgroundColor: 'red'}} />
        <Navigator
          renderScene={this._renderScene}
          initialRoute={{id: 'home'}} />
      </View>
    );
  },

  _renderScene(route, navigator) {
    if (route.id === 'home') {
      return <CharacterList navigator={navigator} />
    } else if (route.id === 'character') {
      return <CharacterDetail navigator={navigator} person={route.person} />
    }
  }
});

var CharacterDetail = React.createClass({

  render() {
    let { person } = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
        <Text>{person.name}</Text>
        <Text>{person.mass}</Text>
        <Text>{person.eye_color}</Text>
      </View>
    )
  }

});

var CharacterList = React.createClass({
  getInitialState() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    return { people: dataSource };
  },

  componentDidMount() {
    fetch('https://swapi.co/api/people').
      then((response) => response.json()).
      then((response) => {
        this.setState({
          hasLoaded: true,
          people: this.state.people.cloneWithRows(response.results)
        });
      });
  },

  render() {
    if (!this.state.hasLoaded) {
      return this._renderLoadingView();
    }

    return (
      <View style={{paddingTop: 30, flex: 1}}>
        <ListView
          renderSeparator={this._renderSeparator}
          dataSource={this.state.people}
          renderRow={this._renderRow} />
      </View>
    )
  },

  _renderLoadingView() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicatorIOS />
      </View>
    );
  },

  _renderRow(rowData) {
    return (
      <TouchableHighlight style={styles.row} underlayColor="#ccc"
        onPress={() => { this.props.navigator.push({id: 'character', person: rowData}) }}>
        <Text>{rowData.name}</Text>
      </TouchableHighlight>
    )
  },

  _renderSeparator() {
    return (
      <View style={{height: 1, flex: 1, backgroundColor: 'green'}} />
    )
  }
});

var styles = StyleSheet.create({
  container: {
    height: 200,
  },
  row: {
    padding: 20,
  },
  scrollContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  child: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  }
});

AppRegistry.registerComponent('main', () => StarWarsApp);
