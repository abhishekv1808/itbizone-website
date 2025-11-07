const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
    quotationNumber: {
        type: String,
        unique: true,
        required: true
    },
    series: {
        type: Number,
        required: true,
        unique: true,
        auto: true
    },
    clientDetails: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        company: { type: String, default: '' },
        phone: { type: String, default: '' },
        address: { type: String, default: '' }
    },
    services: [
        {
            id: String,
            name: String,
            price: Number,
            category: String
        }
    ],
    subtotal: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    discountPercentage: {
        type: Number,
        default: 10
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'sent', 'accepted', 'rejected', 'expired'],
        default: 'draft'
    },
    validityDays: {
        type: Number,
        default: 30
    },
    expiryDate: {
        type: Date
    },
    notes: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date
    }
});

// Pre-save middleware to generate quotation number and set expiry date
quotationSchema.pre('save', async function(next) {
    if (this.isNew) {
        try {
            // Get the next series number
            const lastQuotation = await mongoose.model('Quotation').findOne()
                .sort({ series: -1 })
                .exec();
            
            this.series = lastQuotation ? lastQuotation.series + 1 : 1001;
            this.quotationNumber = `ITBIZ-QT-${String(this.series).padStart(4, '0')}`;
            
            // Set expiry date
            this.expiryDate = new Date();
            this.expiryDate.setDate(this.expiryDate.getDate() + this.validityDays);
        } catch (error) {
            next(error);
        }
    }
    next();
});

module.exports = mongoose.model('Quotation', quotationSchema);
