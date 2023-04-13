import express from "express";
import APIController from '../controllers/APIController';
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers)
    router.post('/createuser', APIController.createNewUser)
    return app.use('/api/v1/', router)
}

export default initAPIRoute;
