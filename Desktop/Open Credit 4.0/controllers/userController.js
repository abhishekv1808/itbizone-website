exports.getHome = (req,res,next)=>{
    res.render('../views/user/home.ejs', {pageTitle: "Home page | open credit", currentPage: "home"});
}

exports.getEMICalculator = (req,res,next)=>{
    res.render('../views/user/emi-calculator.ejs', {pageTitle: "EMI Calculator | open credit", currentPage: "emi-calculator"});
}

exports.getPersonalLoan = (req,res,next)=>{
    res.render('../views/user/personal_loan.ejs', {pageTitle: "Personal Loan | open credit", currentPage: "personal-loan"});
}

exports.getBusinessLoan = (req,res,next)=>{
    res.render('../views/user/business_loan.ejs', {pageTitle: "Business Loan | open credit", currentPage: "business-loan"});
}

exports.getCibilService = (req,res,next)=>{
    res.render('../views/user/cibil.ejs', {pageTitle: "CIBIL Update Service | open credit", currentPage: "cibil-service"});
}

exports.getContact = (req,res,next)=>{
    res.render('../views/user/contact.ejs', {pageTitle: "Contact Us | Open Credit", currentPage: "contact"});
}

exports.getCreditCards = (req,res,next)=>{
    res.render('../views/user/credit_cards.ejs', {pageTitle: "Credit Cards | Open Credit", currentPage: "credit-cards"});
}

exports.getAboutUs = (req,res,next)=>{
    res.render('../views/user/aboutUs.ejs', {pageTitle: "About Us | Open Credit", currentPage: "about-us"});
}

exports.getHomeLoan = (req,res,next)=>{
    res.render('../views/user/home_loan.ejs', {pageTitle: "Home Loan | Open Credit", currentPage: "home-loan"});
}

exports.getCarLoan = (req,res,next)=>{
    res.render('../views/user/car_loan.ejs', {pageTitle: "Car Loan | Open Credit", currentPage: "car-loan"});
}

exports.getEducationLoan = (req,res,next)=>{
    res.render('../views/user/education-loan.ejs', {pageTitle: "Education Loan | Open Credit", currentPage: "education-loan"});
}

exports.applyPersonalLoan = (req,res,next)=>{
    res.render('../views/user/apply-personal-loan.ejs', {pageTitle: "Apply Personal Loan | Open Credit", currentPage: "apply-personal-loan"});
}

exports.getHealthInsurance = (req,res,next)=>{
    res.render('../views/user/health-insurance.ejs', {pageTitle: "Health Insurance | Open Credit", currentPage: "health-insurance"});
}

exports.getLifeInsurance = (req,res,next)=>{
    res.render('../views/user/life-insurance.ejs', {pageTitle: "Life Insurance | Open Credit", currentPage: "life-insurance"});
}

exports.getTaxationServices = (req,res,next)=>{
    res.render('../views/user/taxation-services.ejs', {pageTitle: "Taxation Services | Open Credit", currentPage: "taxation-services"});
}



