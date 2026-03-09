import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const sample = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i}`,
  name: `Founder ${i + 1}`,
  company: `Startup ${i + 1}`,
  avatar: 'https://via.placeholder.com/64',
}));

export default function DirectoryScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 12 }}>Founders</Text>
      <FlatList
        data={sample}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ flexDirection: 'row', padding: 12, marginBottom: 8, backgroundColor: '#fff', borderRadius: 8 }}>
            <Image source={{ uri: item.avatar }} style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }} />
            <View>
              <Text style={{ fontWeight: '600' }}>{item.name}</Text>
              <Text style={{ color: '#666' }}>{item.company}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
