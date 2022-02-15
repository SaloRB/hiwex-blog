/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonCustom from './components/button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      flag: false,
    };

    console.log('constructor');

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // Peticiones asincronas
    console.log('componentDidMount');
  }

  // Deprecated
  componentWillMount() {
    console.log('componentWillMount');
  }

  handleUp() {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 1});
  }

  handleDown() {
    const {counter: ct} = this.state;
    this.setState({counter: ct - 1});
  }

  handleDelete() {
    this.setState({flag: true});
  }

  render() {
    const {counter, flag} = this.state;
    console.log('render');

    if (flag) {
      return null;
    }

    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <ButtonCustom label="-" action={this.handleDown} />

          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>

          <ButtonCustom label="+" action={this.handleUp} />
        </View>

        <ButtonCustom label="D" action={this.handleDelete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },
  subcontainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
