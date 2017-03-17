'use strict';

var url = require('url');

var APIRoot = require('./APIRootService');

module.exports.rootGET = function rootGET (req, res, next) {
  APIRoot.rootGET(req.swagger.params, res, next);
};
