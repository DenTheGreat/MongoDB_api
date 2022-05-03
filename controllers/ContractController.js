const Contract = require("../db/models/contract");

module.exports = class ContractController {
    static async getAll(req, res) {
        try {
            const companies = await Contract.find();
            return res.json({
                success: true,
                message: 'List of contracts:',
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
        let contract = null;
        try {
            contract = await Contract.findById(req.params.id);
            if (!contract) {
                return res.status(404).json({
                    success: false,
                    message: 'No contracts found',
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
            message: 'Requested contract data',
            data: contract,
        });
    }

    static async create(req, res) {
        const contract = new Contract(req.body);

        try {
            await contract.save();
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
            data: contract,
        });
    }

    static async update(req, res) {
        const updatedContract = new Contract(req.body);
        let contract = null;
        try {
            contract = await Contract.findById(req.params.id);
            if (!contract) {
                return res.status(404).json({
                    success: false,
                    message: 'Contract not found',
                    data: null,
                });
            } else {
                updatedContract.save();
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
            data: contract,
        });
    }

    static async delete(req, res) {
        let contract = null;
        try {
            contract = await Contract.findById(req.params.id);
            if (!contract) {
                return res.status(404).json({
                    success: false,
                    message: 'Company not found',
                    data: null,
                });
            }
            else{
                contract.delete();
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
            message: 'Contract have been deleted',
            data: contract,
        });
    }
}
