import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/detail/user/:userId', homeController.getDetailPage)
    router.get('/create', homeController.getCreatePage)
    router.post('/create', homeController.createUser)
    router.post('/deleteuser', homeController.deleteUser)
    router.get('/edituser/:userId', homeController.editUser)
    router.post('/updateuser', homeController.updateUser)

    return app.use('/', router)
}

module.exports = initWebRoute;
