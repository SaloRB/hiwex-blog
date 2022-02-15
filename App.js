/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ButtonCustom from './components/button';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const {counter} = this.state;
  //   if (nextState.counter === counter) {
  //     return false;
  //   }

  //   return true;
  // }

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

  handleReset() {
    this.setState({counter: 0});
  }

  render() {
    const {counter} = this.state;

    console.log('render');

    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <ButtonCustom label="-" action={this.handleDown} />

          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>

          <ButtonCustom label="+" action={this.handleUp} />
        </View>

        <View style={styles.subcontainerReset}>
          <TouchableOpacity style={styles.btnReset} onPress={this.handleReset}>
            <Text style={styles.btnTxt}>Reset</Text>
          </TouchableOpacity>
        </View>
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
  subcontainerReset: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
  btnTxt: {
    fontSize: 18,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },
  btnReset: {
    height: 50,
    width: '80%',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
