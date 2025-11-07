const Quotation = require('../models/quotationModel');

// Create a new quotation
exports.createQuotation = async (req, res) => {
    try {
        const { clientDetails, services } = req.body;

        // Validate input
        if (!clientDetails || !services || services.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Client details and services are required'
            });
        }

        // Calculate subtotal
        const subtotal = services.reduce((sum, service) => sum + service.price, 0);
        
        // Calculate discount (10% by default)
        const discount = Math.floor(subtotal * 0.1);
        
        // Calculate total
        const total = subtotal - discount;

        // Create quotation object
        const quotation = new Quotation({
            clientDetails: {
                fullName: clientDetails.fullName || '',
                email: clientDetails.email || '',
                company: clientDetails.company || '',
                phone: clientDetails.phone || '',
                address: clientDetails.address || ''
            },
            services: services,
            subtotal: subtotal,
            discount: discount,
            total: total,
            validityDays: clientDetails.validityDays || 30
        });

        // Save to database
        await quotation.save();

        // Return response with quotation ID
        res.json({
            success: true,
            message: 'Quotation created successfully',
            quotationId: quotation._id,
            quotationNumber: quotation.quotationNumber
        });

    } catch (error) {
        console.error('Error creating quotation:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating quotation',
            error: error.message
        });
    }
};

// Get quotation by ID
exports.getQuotation = async (req, res) => {
    try {
        const { id } = req.params;

        const quotation = await Quotation.findById(id);

        if (!quotation) {
            return res.status(404).json({
                success: false,
                message: 'Quotation not found'
            });
        }

        res.json({
            success: true,
            quotation: quotation
        });

    } catch (error) {
        console.error('Error fetching quotation:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching quotation',
            error: error.message
        });
    }
};

// Get quotation page (view)
exports.getQuotationPage = async (req, res) => {
    try {
        const { id } = req.params;

        const quotation = await Quotation.findById(id);

        if (!quotation) {
            return res.status(404).render('user/quotation-not-found', {
                message: 'Quotation not found'
            });
        }

        // Calculate company GST info (if needed)
        const companyDetails = {
            name: 'ITBIZONE',
            gst: '1234567890',
            address: 'Address Line 1',
            city: 'City',
            state: 'State',
            pin: '000000',
            email: 'info@itbizone.com',
            phone: '+91 XXXXXXXXXX'
        };

        res.render('user/quotation', {
            quotation: quotation,
            company: companyDetails,
            formattedDate: quotation.createdAt.toLocaleDateString('en-IN'),
            formattedExpiry: quotation.expiryDate.toLocaleDateString('en-IN')
        });

    } catch (error) {
        console.error('Error rendering quotation page:', error);
        res.status(500).render('user/error', {
            message: 'Error loading quotation'
        });
    }
};

// Get all quotations (admin)
exports.getAllQuotations = async (req, res) => {
    try {
        const quotations = await Quotation.find()
            .sort({ createdAt: -1 })
            .limit(50);

        res.json({
            success: true,
            count: quotations.length,
            quotations: quotations
        });

    } catch (error) {
        console.error('Error fetching quotations:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching quotations',
            error: error.message
        });
    }
};

// Update quotation status
exports.updateQuotationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ['draft', 'sent', 'accepted', 'rejected', 'expired'];

        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status'
            });
        }

        const quotation = await Quotation.findByIdAndUpdate(
            id,
            { status: status },
            { new: true }
        );

        if (!quotation) {
            return res.status(404).json({
                success: false,
                message: 'Quotation not found'
            });
        }

        res.json({
            success: true,
            message: 'Quotation status updated',
            quotation: quotation
        });

    } catch (error) {
        console.error('Error updating quotation:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating quotation',
            error: error.message
        });
    }
};

// Download quotation as PDF (client-side generation)
exports.downloadQuotationPDF = async (req, res) => {
    try {
        const { id } = req.params;

        const quotation = await Quotation.findById(id);

        if (!quotation) {
            return res.status(404).json({
                success: false,
                message: 'Quotation not found'
            });
        }

        // Return HTML that client-side will convert to PDF
        const companyDetails = {
            name: 'ITBIZONE',
            gst: '1234567890',
            address: 'Address Line 1',
            city: 'City',
            state: 'State',
            pin: '000000',
            email: 'info@itbizone.com',
            phone: '+91 XXXXXXXXXX'
        };

        res.json({
            success: true,
            quotation: quotation,
            company: companyDetails,
            formattedDate: quotation.createdAt.toLocaleDateString('en-IN'),
            formattedExpiry: quotation.expiryDate.toLocaleDateString('en-IN')
        });

    } catch (error) {
        console.error('Error downloading quotation:', error);
        res.status(500).json({
            success: false,
            message: 'Error downloading quotation',
            error: error.message
        });
    }
};
