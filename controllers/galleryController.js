var galleryModel = require('../models/galleryModel.js');

/**
 * galleryController.js
 *
 * @description :: Server-side logic for managing gallerys.
 */
module.exports = {

    /**
     * galleryController.list()
     */
    list: function(req, res) {
        galleryModel.find(function(err, gallerys){
            if(err) {
                return res.json(500, {
                    message: 'Error getting gallery.'
                });
            }
            return res.json(gallerys);
        });
    },

    /**
     * galleryController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        galleryModel.findOne({_id: id}, function(err, gallery){
            if(err) {
                return res.json(500, {
                    message: 'Error getting gallery.'
                });
            }
            if(!gallery) {
                return res.json(404, {
                    message: 'No such gallery'
                });
            }
            return res.json(gallery);
        });
    },

    /**
     * galleryController.create()
     */
    create: function(req, res) {
        var gallery = new galleryModel({			name : req.body.name,			type : req.body.type,			mainImageUrl : req.body.mainImageUrl,			thumbnails : req.body.thumbnails,			images : req.body.images,			user : req.body.user
        });

        gallery.save(function(err, gallery){
            if(err) {
                return res.json(500, {
                    message: 'Error saving gallery',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: gallery._id
            });
        });
    },

    /**
     * galleryController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        galleryModel.findOne({_id: id}, function(err, gallery){
            if(err) {
                return res.json(500, {
                    message: 'Error saving gallery',
                    error: err
                });
            }
            if(!gallery) {
                return res.json(404, {
                    message: 'No such gallery'
                });
            }

            gallery.name =  req.body.name ? req.body.name : gallery.name;			gallery.type =  req.body.type ? req.body.type : gallery.type;			gallery.mainImageUrl =  req.body.mainImageUrl ? req.body.mainImageUrl : gallery.mainImageUrl;			gallery.thumbnails =  req.body.thumbnails ? req.body.thumbnails : gallery.thumbnails;			gallery.images =  req.body.images ? req.body.images : gallery.images;			gallery.user =  req.body.user ? req.body.user : gallery.user;			
            gallery.save(function(err, gallery){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting gallery.'
                    });
                }
                if(!gallery) {
                    return res.json(404, {
                        message: 'No such gallery'
                    });
                }
                return res.json(gallery);
            });
        });
    },

    /**
     * galleryController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        galleryModel.findByIdAndRemove(id, function(err, gallery){
            if(err) {
                return res.json(500, {
                    message: 'Error getting gallery.'
                });
            }
            return res.json(gallery);
        });
    }
};