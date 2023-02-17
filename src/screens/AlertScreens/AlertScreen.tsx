import * as React from 'react';
import { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const acknowledge = () => {};
  const callEmergencyServices = () => {};

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
          Alert
        </Text>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 48,
          }}>
          Seizure Event Detected
        </Text>
        <View style={{ marginTop: 48 }}>
          <Button
            onPress={acknowledge}
            title="Acknowledge"
            color="#acb0b1"
            accessibilityLabel="Call emergency services"
          />
        </View>
        <View style={{ marginTop: 24 }}>
          <Button
            onPress={callEmergencyServices}
            title="Call Emergency Services"
            color="#df1d10"
            accessibilityLabel="Call emergency services"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#df1d10',
  },
  body: {
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
});
