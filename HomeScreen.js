import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Header from './Header';
import NewDevice from './NewDevice';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return 'error';
  }
};
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      devices: [],
    };
  }

  componentDidMount() {
    getData('Devices').then((r) => {
      if (r !== undefined) {
        this.setState({devices: JSON.parse(r)});
        console.log(JSON.parse(r));
      }
    });
  }

  changeVisible = () => {
    this.setState({modalVisible: false});
  };

  addDevice = (device) => {
    if (this.state.devices.empty) {
      this.setState({
        devices: [device],
        modalVisible: false,
      });
      storeData(
        'Devices',
        JSON.stringify([...this.state.devices, device]),
      ).then((r) => r);
    } else {
      this.setState({
        devices: [...this.state.devices, device],
        modalVisible: false,
      });
      storeData(
        'Devices',
        JSON.stringify([...this.state.devices, device]),
      ).then((r) => r);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header header={'Devices'} marginTop={24} />
        <ScrollView>
          <View style={styles.viewOne}>
            {this.state.devices.map((value, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: 160,
                    height: 160,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    marginTop: 24,
                    backgroundColor: value.color,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                      textTransform: 'uppercase',
                    }}>
                    {value.name}
                  </Text>
                  <Text>{value.room}</Text>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              style={[styles.buttons, {backgroundColor: '#8d9bc4'}]}
              onPress={() => this.setState({modalVisible: true})}>
              <Text style={{fontSize: 50}}>+</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <NewDevice
          modalVisible={this.state.modalVisible}
          fnChangeVisible={this.changeVisible}
          fnAddDevice={this.addDevice}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d4e3',
  },
  viewOne: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    paddingBottom: 5,
  },
  buttons: {
    width: 160,
    height: 160,
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginTop: 24,
    backgroundColor: 'lightpink',
  },
});
