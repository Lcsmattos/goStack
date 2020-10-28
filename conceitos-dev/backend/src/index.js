// Introdução ao node e ao estilo de rotas com o express e seus métodos.
// Introdução ao GET, POST, PUT e DELETE

const {uuid, isUuid} = require('uuidv4');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());


const projects = [];

function logRequests(req, res, next) {
  const {method, url} = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
}

function validateProjectId(req, res, next) {
  const {id} = req.params;

  if (!isUuid(id)){
    return response.status(400).json({ error: 'Invalid Project ID'});
  }

  return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/projects', (req, res) => {
  const {title} = req.query;

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return res.json(results);
});

app.post('/projects', (req, res) => {
  const {title, owner} = req.body;

  const project = {id: uuid(), title, owner};

  projects.push(project);

  return res.json(project);
});

app.put('/projects/:id', (req, res) => {
  const {id} = req.params
  const {title, owner} = req.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ message: "Error. Project Not Found"})
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return res.json(project)
});

app.delete('/projects/:id', (req, res) => {
  const {id} = req.params
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ message: "Error. Project Not Found"})
  }
  
  projects.splice(projectIndex, 1);

  return response.status(204).send()

});

app.listen(3333, () => {
  console.log('Back-end Started!')
}); 