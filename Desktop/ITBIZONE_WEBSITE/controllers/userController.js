const {check, validationResult } = require('express-validator');
const ContactForm  = require('../models/contactFormModel');


exports.getHome =(req,res,next)=>{
    res.render('../views/user/home.ejs', {pageTitle : "Home | ITBIZONE"});
}

exports.getContactUs = (req,res,next)=>{
    res.render('../views/user/contact.ejs', {pageTitle : "Contact Us | ITBIZONE", oldInput :{fullName: '', email: '', mobileNumber: '', company: '', service: '', description: '', timeline: ''}, errors: []});
}


exports.getWebDevelopment = (req,res,next)=>{
    res.render('../views/user/web-development.ejs', {pageTitle : "Website Development Services | ITBIZONE"});
}

exports.getDigitalMarketing = (req,res,next)=>{
    res.render('../views/user/digital-marketing.ejs', {pageTitle : "Digital Marketing Services | ITBIZONE"});
}

exports.getGraphicDesign = (req,res,next)=>{
    res.render('../views/user/graphic-design.ejs', {pageTitle : "Graphic Design Services | ITBIZONE"});
}


exports.postContact = [

    check('fullName')
    .notEmpty().withMessage('Please Enter Full Name')
    .isLength({ min: 3 }).withMessage('Full Name must be at least 3 characters long')
    .matches(/^[a-zA-Z\s]*$/).withMessage('Full Name must contain only letters and spaces'),

    check('email')
    .notEmpty().withMessage('Please Enter Email')
    .isEmail().withMessage('Please Enter a Valid Email'),

    check('mobileNumber')
    .notEmpty().withMessage('Please Enter Mobile Number')
    .isLength({min:10, max:10}).withMessage('Mobile Number must be 10 digits')
    .matches(/^[0-9]*$/).withMessage('Mobile Number must contain only numbers'),

    check('company')
    .notEmpty().withMessage('Please Enter Company Name')
    .isLength({ min: 2 }).withMessage('Company Name must be at least 2 characters long')
    .matches(/^[a-zA-Z\s]*$/).withMessage('Company Name must contain only letters and spaces'),

    check('service')
    .notEmpty().withMessage('Please Select a Service')
    .isIn(['Website-Development', 'Graphic-Design', 'Digital-Marketing', 'Other', 'IT-Consulting']).withMessage('Please Select a Valid Service'),

    check('description')
    .notEmpty().withMessage('Please Enter a Description')
    .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),


    check('timeline')
    .notEmpty().withMessage('Please Select a Timeline') 
    .isIn(['asap', '1-month', '2-3-months', '3-6-months', '6-plus-months', 'just-exploring']).withMessage('Please Select a Valid Timeline'),

    async(req,res,next)=>{
        const {fullName, email, mobileNumber, company, service, description, timeline} = req.body;
        const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).render('../views/user/contact.ejs', {
                    pageTitle: "Contact Us | ITBIZONE",
                    errors: errors.array().map(err => err.msg),
                    oldInput: {
                        fullName ,
                        email ,
                        mobileNumber,
                        company,
                        service,
                        description,
                        timeline
                    }
                });
            }

        const contactForm = new ContactForm({
            fullName,
            email,
            mobileNumber,
            company,
            service,
            description,
            timeline
        });

        await contactForm.save().then(()=>{
                res.status(201).render('../views/user/contact.ejs', {
                    pageTitle: "Contact Us | ITBIZONE",
                    successMessage: 'Your message has been sent successfully!',
                    errors: {},
                    oldInput: {
                        fullName:"",
                        email:"",
                        mobileNumber:"",
                        company:"",
                        service:"",
                        description:"",
                        timeline :""
                    }
                });
        }).catch(err=>{
            console.log(err);
                res.status(500).render('../views/user/contact.ejs', {
                    pageTitle: "Contact Us | ITBIZONE",
                    errors: { general: 'An error occurred while submitting the form. Please try again later.' },
                    oldInput: {
                        fullName,
                        email,
                        mobileNumber,
                        company,
                        service,
                        description,
                        timeline
                    }
                });
        });
    }
]
    