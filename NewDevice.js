import React from 'react';
import {Modal, StyleSheet, TextInput} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native';
import Header from './Header';
import {TouchableOpacity} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';

export default class NewDevice extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'name',
      room: 'value',
      command: 'command',
      color: '#2c00fe',
    };
  }

  render() {
    return (
      <Modal visible={this.props.modalVisible}>
        <Header header={'New device'} marginTop={0} />
        <View style={styles.modalView}>
          <TextInput
            style={styles.inputText}
            placeholder={'Name'}
            onChangeText={(value) => this.setState({name: value})}
          />
          <TextInput
            style={styles.inputText}
            placeholder={'Room'}
            onChangeText={(value) => this.setState({room: value})}
          />
          <TextInput
            style={styles.inputText}
            placeholder={'Command'}
            onChangeText={(value) => this.setState({command: value})}
          />
          <ColorPicker
            onColorSelected={(color) => this.setState({color: color})}
            style={{height: 200}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.fnChangeVisible()}>
              <Text style={styles.textButton}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.fnAddDevice({
                  name: this.state.name,
                  room: this.state.room,
                  command: this.state.command,
                  color: this.state.color,
                })
              }>
              <Text style={styles.textButton}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalView: {
    backgroundColor: '#d7d4e3',
    paddingHorizontal: 28,
    paddingTop: 24,
    width: '100%',
    height: '100%',
  },
  inputText: {
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  textButton: {
    textTransform: 'uppercase',
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#8d9bc4',
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
});
