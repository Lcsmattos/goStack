import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRouter = Router();

// Rota: Receber a requisição, chamar outro arquivo e devolver uma resposta

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionRouter;