/* eslint-disable camelcase */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticaded';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentController = new AppointmentsController();
// Rota: Receber a requisição, chamar outro arquivo e devolver uma resposta

appointmentsRouter.use(ensureAuthenticated);
appointmentsRouter.post('/', appointmentController.create);

export default appointmentsRouter;
