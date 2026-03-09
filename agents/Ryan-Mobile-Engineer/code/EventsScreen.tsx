import React from 'react';
import { View, Text, FlatList } from 'react-native';

const events = Array.from({ length: 6 }).map((_, i) => ({ id: `${i}`, title: `SF Event ${i + 1}`, date: '2026-04-01' }));

export default function EventsScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 12 }}>Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 12, marginBottom: 8, backgroundColor: '#fff', borderRadius: 8 }}>
            <Text style={{ fontWeight: '600' }}>{item.title}</Text>
            <Text style={{ color: '#666' }}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}
