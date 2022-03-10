import { Router } from "express";
import { getUserById, getUsers, postUser, putUser, deleteUser }
    from '../controllers/auth_controller';

const router = Router();

router.get('/', getUsers);
router.get('/:uid', getUserById);
router.post('/', postUser);
router.put('/:uid', putUser);
router.delete('/:uid', deleteUser);

export default router;