import express from 'express';
import { AuthController } from '../../../controllers/auth.controller';

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
    AuthController.currentUser(req, res);
});

export { router as currentUserRouter };