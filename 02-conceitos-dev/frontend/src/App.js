import React,{useState, useEffect} from 'react';
import api from "./services/api"

import './App.css';
// import backgroundImage from './assets/Imagem.png'
 
import Header from './components/Header.js';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo Projeto ${Date.now()}` ]);
    
    const response = await api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Lucas Mattos"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <> 
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
      <br/>
      {/* <img src={backgroundImage} alt="imagem"/> */}
    </>
  );
}

export default App;