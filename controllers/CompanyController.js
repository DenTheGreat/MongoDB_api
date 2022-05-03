const Company = require("../db/models/company");
require ('mongoose');

module.exports = class CompanyController {
    static async getAll(req, res) {
        try {
            const companies = await Company.find();
            return res.json({
                success: true,
                message: 'List of companies:',
                data: companies,
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
                data: null,
            });
        }
    }

    static async getOne(req, res) {
        let company = null;
        try {
            company = await Company.findById(req.params.id);
            if (!company) {
                return res.status(404).json({
                    success: false,
                    message: 'No companies found',
                    data: null,
                });
            }
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
                data: null,
            });
        }
        return res.json({
            success: true,
            message: 'Requested company data',
            data: company,
        });
    }

    static async create(req, res) {
        const company = new Company(req.body);

        try {
            await company.save();
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
                data: null,
            });
        }
        return res.status(201).json({
            success: true,
            message: 'Company has been created',
            data: company,
        });
    }

    static async update(req, res) {
        const updatedCompany = new Company(req.body);
        let company = null;
        try {
            company = await Company.findById(req.params.id);
            if (!company) {
                return res.status(404).json({
                    success: false,
                    message: 'Company not found',
                    data: null,
                });
            } else {
                updatedCompany.save();
            }


        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
                data: null,
            });
        }
        return res.status(201).json({
            success: true,
            message: 'Company has been saved',
            data: company,
        });
    }

    static async delete(req, res) {
        let company = null;
        try {
            company = await Company.findById(req.params.id);
            if (!company) {
                return res.status(404).json({
                    success: false,
                    message: 'Company not found',
                    data: null,
                });
            }
            else{
                company.delete();
            }

        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
                data: null,
            });
        }
        return res.status(201).json({
            success: true,
            message: 'Company have been deleted',
            data: company,
        });
    }
}
