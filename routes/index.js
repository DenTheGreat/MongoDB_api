const express = require ('express');
const router = express.Router();
//company
const CompanyController = require ('../controllers/companyController');

console.dir(CompanyController);
//company
router.get('/company', (req, res) => CompanyController.getAll(req,res));
router.get('/company/:id', (req, res) => CompanyController.getOne(req,res));

router.post('/company', (req,res) => CompanyController.create(req,res));

router.put('/company/:id', (req, res) =>CompanyController.update(req,res));

router.delete('/company/:id', (req, res) => CompanyController.delete(req,res));


//contract

const ContractController = require ('../controllers/contractController');

console.dir(ContractController);
router.get('/contract', (req, res) => ContractController.getAll(req,res));
router.get('/contract/:id', (req, res) => ContractController.getOne(req,res));

router.post('/contract', (req,res) => ContractController.create(req,res));

router.put('/contract/:id', (req, res) =>ContractController.update(req,res));

router.delete('/contract/:id', (req, res) => ContractController.delete(req,res));




module.exports = router;

