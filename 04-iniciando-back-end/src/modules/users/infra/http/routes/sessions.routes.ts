import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionRouter = Router();
const sessionsController = new SessionsController();

// Rota: Receber a requisição, chamar outro arquivo e devolver uma resposta

sessionRouter.post('/', sessionsController.create);

export default sessionRouter;
