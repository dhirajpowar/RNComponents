/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): React.JSX.Element {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContinue}>
        <Text style={styles.txt}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
