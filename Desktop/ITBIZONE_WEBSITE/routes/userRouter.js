const express = require('express');
const userRouter = express.Router();
const{getHome, getContactUs, getWebDevelopment, getDigitalMarketing, getGraphicDesign, postContact, getAboutUs, getPortfolio, getUIUX, getPricing} = require('../controllers/userController');


userRouter.get('/', getHome);
userRouter.get('/contact', getContactUs);
userRouter.get('/services/website-development', getWebDevelopment);
userRouter.post('/contact', postContact);
userRouter.get('/services/digital-marketing', getDigitalMarketing);
userRouter.get('/services/graphic-design', getGraphicDesign);
userRouter.get('/about', getAboutUs);
userRouter.get('/portfolio', getPortfolio);
userRouter.get('/ui-ux', getUIUX);
userRouter.get('/pricing', getPricing);

// Debug endpoint to check services data
userRouter.get('/api/services', (req, res) => {
    const {getPricing} = require('../controllers/userController');
    const mockRes = {
        render: (path, data) => {
            res.json({
                status: 'ok',
                servicesCount: {
                    websiteDevelopment: data.services.websiteDevelopment.subServices.length,
                    graphicDesign: data.services.graphicDesign.subServices.length,
                    digitalMarketing: data.services.digitalMarketing.subServices.length,
                    socialMediaManagement: data.services.socialMediaManagement.subServices.length
                },
                sampleServices: {
                    websiteDevelopment: data.services.websiteDevelopment.subServices.slice(0, 3)
                }
            });
        }
    };
    getPricing(req, mockRes, null);
});

module.exports = userRouter;