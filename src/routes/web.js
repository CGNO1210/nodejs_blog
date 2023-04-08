import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/detail/user/:userId', homeController.getDetailPage)
    router.post('/create', homeController.createUser)
    return app.use('/', router)
}

module.exports = initWebRoute;
