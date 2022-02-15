import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class ButtonCustom extends Component {
  constructor(props) {
    super(props);

    console.log('hijo constructor');
  }

  componentDidMount() {
    // Peticiones asincronas
    console.log('hijo componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log({nextProps, nextState});
    console.log('hijo shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({prevProps, prevState});
    console.log('hijo componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('hijo componentWillUnmount');
  }

  // Deprecated
  componentWillMount() {
    console.log('hijo componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('hijo componentWillReceiveProps');
  }

  componentWillUpdate() {
    console.log('hijo componentWillUpdate');
  }

  render() {
    const {label, action} = this.props;
    console.log('hijo render');

    return (
      <TouchableOpacity style={styles.btn} onPress={action}>
        <Text style={styles.btnTxt}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

ButtonCustom.defaultProps = {
  label: 'Button',
  action: () => null,
};

ButtonCustom.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
};

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  btnTxt: {
    fontSize: 25,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },
});

export default ButtonCustom;
