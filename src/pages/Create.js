import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api';

function Create() {

  const [content, setContent] = useState('');

  async function addNote() {
    console.log(content);
    const response = await api.post('notes', {
      content
    });
    console.log(response);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        value={content}
        onChangeText={setContent} 
        style={styles.noteInput} 
        multiline={true} 
        placeholder='Type here your note'/>
      <TouchableOpacity onPress={addNote} style={styles.button}>
        <MaterialIcons style={styles.icon} name='add'/> 
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    height: 50,
    fontSize: 18,
    color: '#333',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#333',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 36,
  },
});

export default Create;