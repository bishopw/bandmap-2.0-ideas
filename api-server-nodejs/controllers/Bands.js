'use strict';

var url = require('url');

var Bands = require('./BandsService');

module.exports.bandsBandDELETE = function bandsBandDELETE (req, res, next) {
  Bands.bandsBandDELETE(req.swagger.params, res, next);
};

module.exports.bandsBandGET = function bandsBandGET (req, res, next) {
  Bands.bandsBandGET(req.swagger.params, res, next);
};

module.exports.bandsBandPATCH = function bandsBandPATCH (req, res, next) {
  Bands.bandsBandPATCH(req.swagger.params, res, next);
};

module.exports.bandsBandPUT = function bandsBandPUT (req, res, next) {
  Bands.bandsBandPUT(req.swagger.params, res, next);
};

module.exports.bandsDELETE = function bandsDELETE (req, res, next) {
  Bands.bandsDELETE(req.swagger.params, res, next);
};

module.exports.bandsGET = function bandsGET (req, res, next) {
  Bands.bandsGET(req.swagger.params, res, next);
};

module.exports.bandsPATCH = function bandsPATCH (req, res, next) {
  Bands.bandsPATCH(req.swagger.params, res, next);
};

module.exports.bandsPOST = function bandsPOST (req, res, next) {
  Bands.bandsPOST(req.swagger.params, res, next);
};

module.exports.bandsPUT = function bandsPUT (req, res, next) {
  Bands.bandsPUT(req.swagger.params, res, next);
};
