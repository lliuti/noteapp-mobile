import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import api from '../services/api';

function Main({ navigation }) {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      const response = await api.get('/notes'); 
      setNotes(response.data);
    };

    loadNotes();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Create');
      }} style={styles.button}>
        <Text style={styles.buttonText}>Add a new note</Text>
      </TouchableOpacity>
      {notes.map(note => (
        <View key={note.id} style={styles.noteBox}>
          <Text style={styles.noteText}>{note.content}</Text>
        </View>
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: '#333',    
    width: '100%',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteBox: {
    marginTop: 15,
    backgroundColor: '#fafafa',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 2,
    elevation: 2,
  },
  noteText: {
    color: '#333',
    fontSize: 18,
  }
});

export default Main;