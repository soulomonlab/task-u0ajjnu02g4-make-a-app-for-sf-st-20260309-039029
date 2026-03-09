import React from 'react';
import { View, Text } from 'react-native';

export default function MessagesScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Messages</Text>
      <Text style={{ marginTop: 12, color: '#666' }}>Chat implementation pending design.</Text>
    </View>
  );
}
