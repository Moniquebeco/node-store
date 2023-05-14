'use strict' // força o javascript s ser mais severo com erros

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/',(req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;