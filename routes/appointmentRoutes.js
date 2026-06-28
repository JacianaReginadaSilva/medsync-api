// src/controllers/appointmentController.js
// src/routes/appointmentRoutes.js
const { Router } = require('express');
const appointmentController = require('../controllers/appointmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const routes = Router();

routes.use(authMiddleware); // Protege todos os endpoints abaixo

routes.post('/appointments', appointmentController.store);
routes.get('/appointments', appointmentController.index);
routes.put('/appointments/:id', appointmentController.update);
routes.delete('/appointments/:id', appointmentController.delete);

module.exports = routes;