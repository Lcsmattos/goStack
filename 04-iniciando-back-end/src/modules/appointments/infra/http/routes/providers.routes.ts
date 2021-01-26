/* eslint-disable camelcase */
import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticaded';
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();
// Rota: Receber a requisição, chamar outro arquivo e devolver uma resposta

providersRouter.use(ensureAuthenticated);
providersRouter.get('/', providersController.index);

export default providersRouter;
