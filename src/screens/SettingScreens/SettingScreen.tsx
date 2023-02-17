import * as React from 'react';
import { useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [darkModeEnabled, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((previousState) => !previousState);
  const [askForWiFiEnabled, setAskForWiFi] = useState(false);
  const toggleAskForWiFi = () => setAskForWiFi((previousState) => !previousState);
  const [pushNotifsEnabled, setPushNotifs] = useState(false);
  const togglePushNotifs = () => setPushNotifs((previousState) => !previousState);
  const [bluetoothEnabled, setBluetooth] = useState(false);
  const toggleBluetooth = () => setBluetooth((previousState) => !previousState);

  return (
    <>
      <View style={styles.header}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Settings
        </Text>
      </View>
      <View style={styles.settingsList}>
        <View style={styles.settingsRow}>
          <Text style={{ flex: 1 }}>Dark Mode</Text>
          <Switch
            trackColor={{ true: '#7ab8e1', false: '#d3d3d3' }}
            thumbColor={darkModeEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#fbfbfb"
            onValueChange={toggleDarkMode}
            value={darkModeEnabled}
          />
        </View>
        <View style={styles.settingsRow}>
          <Text style={{ flex: 1 }}>
            Automatically Ask for WiFi Credentials
          </Text>
          <Switch
            trackColor={{ true: '#7ab8e1', false: '#d3d3d3' }}
            thumbColor={askForWiFiEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#fbfbfb"
            onValueChange={toggleAskForWiFi}
            value={askForWiFiEnabled}
          />
        </View>
        <View style={styles.settingsRow}>
          <Text style={{ flex: 1 }}>Allow Push Notifications</Text>
          <Switch
            trackColor={{ true: '#7ab8e1', false: '#d3d3d3' }}
            thumbColor={pushNotifsEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#fbfbfb"
            onValueChange={togglePushNotifs}
            value={pushNotifsEnabled}
          />
        </View>
        <View style={styles.settingsRow}>
          <Text style={{ flex: 1 }}>Bluetooth Enabled</Text>
          <Switch
            trackColor={{ true: '#7ab8e1', false: '#d3d3d3' }}
            thumbColor={bluetoothEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#fbfbfb"
            onValueChange={toggleBluetooth}
            value={bluetoothEnabled}
          />
        </View>
      </View>
    </>
  );
}

/*function createSwitchSetting(name, variable, toggleVariable) {
  <View style={styles.settingsRow}>
    <Text style={{ flex: 1 }}>{name}</Text>
    <Switch
      trackColor={{ true: '#7ab8e1', false: '#d3d3d3' }}
      thumbColor={variable ? '#ffffff' : '#ffffff'}
      ios_backgroundColor="#fbfbfb"
      onValueChange={toggleVariable}
      value={variable}
    />
  </View>;
}*/

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#205de3',
  },
  settingsList: {
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  settingsRow: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
