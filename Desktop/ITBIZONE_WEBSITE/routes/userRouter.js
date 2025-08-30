const express = require('express');
const userRouter = express.Router();
const{getHome, getContactUs, getWebDevelopment, getDigitalMarketing, getGraphicDesign, postContact} = require('../controllers/userController');


userRouter.get('/', getHome);
userRouter.get('/contact', getContactUs);
userRouter.get('/services/website-development', getWebDevelopment);
userRouter.post('/contact', postContact);
userRouter.get('/services/digital-marketing', getDigitalMarketing);
userRouter.get('/services/graphic-design', getGraphicDesign);

module.exports = userRouter;