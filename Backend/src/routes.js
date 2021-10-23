const { Router } = require('express');
const QueueEmailController = require('./App/Controllers/QueueEmailController');

const routes = Router();

routes.post('/queues/emails', QueueEmailController.store);

module.exports = routes;
