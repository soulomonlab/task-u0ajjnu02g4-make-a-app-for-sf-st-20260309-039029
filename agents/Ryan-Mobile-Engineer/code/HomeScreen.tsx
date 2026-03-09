import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default function HomeScreen() {
  // Placeholder skeleton screen until Figma delivered
  const data = Array.from({ length: 8 }).map((_, i) => ({ id: `${i}`, title: `Post ${i + 1}` }));

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 12 }}>Home</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 12, marginBottom: 8, backgroundColor: '#fff', borderRadius: 8 }}>
            <Text>{item.title}</Text>
          </View>
        )}
        ListFooterComponent={() => <ActivityIndicator style={{ marginTop: 12 }} />}
      />
    </View>
  );
}
