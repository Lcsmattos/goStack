import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarControllers';
import ensureAuthenticated from '../middlewares/ensureAuthenticaded';

const usersRouter = Router();
const userAvatarController = new UserAvatarController();
const usersController = new UsersController();
const upload = multer(uploadConfig);
// Rota: Receber a requisição, chamar outro arquivo e devolver uma resposta

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
