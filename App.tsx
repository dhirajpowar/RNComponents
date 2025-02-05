/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import PrimaryButton from './src/components/PrimaryButton';
import OutlinedButton from './src/components/OutlinedButton';

function App(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContinue}>
        <Text style={styles.txt}>Continue</Text>
      </TouchableOpacity>
      <PrimaryButton title='Primary Button'></PrimaryButton>
      <OutlinedButton title='Outlined Button'></OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  txt: {
    color: '#FFFFFF'
  },
  btn: {
    borderRadius: 8,
    height: 40,
    width: 150,
    backgroundColor: '#2E69FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContinue: {
    borderRadius: 8,
    height: '5%',
    width: '90%',
    backgroundColor: '#9F9F9F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
});

export default App;
