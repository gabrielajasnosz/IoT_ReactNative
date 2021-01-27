import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text
          style={{fontSize: 24, color: '#ffffff', textTransform: 'uppercase'}}>
          {this.props.header}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b096b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
});
