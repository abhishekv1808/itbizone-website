# OpenCredit 4.0 🏦

A comprehensive financial services platform offering loan calculators, insurance services, and taxation solutions. Built with Node.js, Express, and modern web technologies.

## 🌟 Features

### 🏠 Loan Services
- **Personal Loans** - Quick approval with competitive rates
- **Home Loans** - Complete home financing solutions
- **Car Loans** - Auto financing with flexible terms
- **Business Loans** - Growth capital for businesses
- **Education Loans** - Study abroad and domestic education funding

### 🛡️ Insurance Services
- **Health Insurance** - Comprehensive health coverage calculator
- **Life Insurance** - Term and investment life insurance

### 💼 Financial Tools
- **EMI Calculator** - Calculate monthly installments
- **CIBIL Score** - Credit score checking and improvement
- **Taxation Services** - GST, ITR filing, and tax consultancy

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional, for data persistence)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekv1808/openCredit-4.0.git
   cd openCredit-4.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
openCredit-4.0/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── controllers/           # Route controllers
│   ├── userController.js
│   ├── adminController.js
│   └── authController.js
├── models/               # Data models
│   └── personalLoanModel.js
├── routes/               # Application routes
│   ├── userRouter.js
│   ├── adminRouter.js
│   └── authRouter.js
├── views/                # EJS templates
│   ├── user/            # User-facing pages
│   └── partials/        # Reusable components
├── public/              # Static assets
│   ├── images/          # Images and logos
│   └── output.css       # Compiled Tailwind CSS
└── utils/               # Utility functions
    └── mainUtils.js
```

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Tailwind CSS
- **Styling**: Custom CSS with animations
- **Database**: MongoDB (configurable)
- **Tools**: Nodemon for development

## 📊 Key Pages

### 🏠 Homepage
- Hero section with service overview
- Partner logos and testimonials
- Quick loan application forms

### 🧮 Calculators
- **EMI Calculator**: Loan amount, interest rate, tenure calculations
- **Health Insurance**: Multi-step premium calculator
- **Tax Calculator**: GST and income tax calculations

### 📋 Loan Pages
- Detailed information for each loan type
- Eligibility criteria and required documents
- Bank comparison tables
- Online application forms

### 🎯 Insurance Pages
- Coverage options and premium calculations
- Policy comparison tools
- Claim process information

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/opencredit
SESSION_SECRET=your-session-secret
```

### Database Setup (Optional)
If using MongoDB for data persistence:

```bash
# Install MongoDB locally or use MongoDB Atlas
# Update the MONGODB_URI in .env file
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Interactive Elements**: Hover effects and animations
- **Progressive Web App**: Fast loading and mobile-optimized
- **Accessibility**: WCAG compliant design patterns

## 🔒 Security Features

- Input validation and sanitization
- CSRF protection
- Secure session management
- Rate limiting for API endpoints

## 📈 Performance

- Optimized images and assets
- Minified CSS and JavaScript
- Efficient database queries
- Caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Abhishek V**
- GitHub: [@abhishekv1808](https://github.com/abhishekv1808)
- Email: abhishekv1808@gmail.com

## 🙏 Acknowledgments

- Bank logos and images used with proper attribution
- Tailwind CSS for the utility-first styling approach
- Node.js and Express.js communities

## 📋 TODO

- [ ] Add user authentication and dashboard
- [ ] Implement AWS S3 for document uploads
- [ ] Add email notifications for loan applications
- [ ] Integrate with payment gateways
- [ ] Add admin panel for managing applications
- [ ] Implement real-time chat support

---

**Made with ❤️ for the financial services industry**