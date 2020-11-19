import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, []);

  async function handleAddProject () {
    const response = await api.post('projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Lucas Mattos'
    });

    const project = response.data

    setProjects([...projects, project]);
  }


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />


      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          KeyExtractor={project => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.project}>{project.title}</Text>    
          )}
        />

        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.buttonContainer} 
          onPress={handleAddProject}
        >
          <Text style={styles.textButton}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },

  buttonContainer: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});