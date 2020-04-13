const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); //lista
routes.post('/ongs', OngController.create); //cria

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index); //lista
routes.post('/incidents', IncidentController.create); //cria
routes.delete('/incidents/:id', IncidentController.delete); //deleta

module.exports = routes;