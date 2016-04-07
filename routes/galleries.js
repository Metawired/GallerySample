var express = require('express');
var router = express.Router();
var galleryController = require('../controllers/galleryController.js');

/*
 * GET
 */
router.get('/', function(req, res) {
    galleryController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    galleryController.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    galleryController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    galleryController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    galleryController.remove(req, res);
});

module.exports = router;