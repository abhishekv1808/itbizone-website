const express = require('express');
const path = require('path');
const userRouter = express.Router();
const{getHome, getEMICalculator, getPersonalLoan, getBusinessLoan, getCibilService, getContact, getCreditCards, getAboutUs, getHomeLoan, getCarLoan, getEducationLoan, applyPersonalLoan, getHealthInsurance, getLifeInsurance, getTaxationServices} = require('../controllers/userController');

userRouter.get('/', getHome);
userRouter.get('/emi_calculator', getEMICalculator);
userRouter.get('/personal_loan', getPersonalLoan);
userRouter.get('/business_loan', getBusinessLoan);
userRouter.get('/cibil_service', getCibilService);
userRouter.get('/contact', getContact);
userRouter.get('/credit_cards', getCreditCards);
userRouter.get('/about_us', getAboutUs);
userRouter.get('/home_loan', getHomeLoan);
userRouter.get('/car_loan', getCarLoan);
userRouter.get('/education_loan', getEducationLoan);
userRouter.get('/apply_personal_loan', applyPersonalLoan);
userRouter.get('/health_insurance', getHealthInsurance);
userRouter.get('/life_insurance', getLifeInsurance);
userRouter.get('/taxation_services', getTaxationServices);


module.exports = userRouter;