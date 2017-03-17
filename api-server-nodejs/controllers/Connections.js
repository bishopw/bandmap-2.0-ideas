'use strict';

var url = require('url');

var Connections = require('./ConnectionsService');

module.exports.connectionsConnectionDELETE = function connectionsConnectionDELETE (req, res, next) {
  Connections.connectionsConnectionDELETE(req.swagger.params, res, next);
};

module.exports.connectionsConnectionGET = function connectionsConnectionGET (req, res, next) {
  Connections.connectionsConnectionGET(req.swagger.params, res, next);
};

module.exports.connectionsConnectionPATCH = function connectionsConnectionPATCH (req, res, next) {
  Connections.connectionsConnectionPATCH(req.swagger.params, res, next);
};

module.exports.connectionsConnectionPUT = function connectionsConnectionPUT (req, res, next) {
  Connections.connectionsConnectionPUT(req.swagger.params, res, next);
};

module.exports.connectionsDELETE = function connectionsDELETE (req, res, next) {
  Connections.connectionsDELETE(req.swagger.params, res, next);
};

module.exports.connectionsGET = function connectionsGET (req, res, next) {
  Connections.connectionsGET(req.swagger.params, res, next);
};

module.exports.connectionsPATCH = function connectionsPATCH (req, res, next) {
  Connections.connectionsPATCH(req.swagger.params, res, next);
};

module.exports.connectionsPOST = function connectionsPOST (req, res, next) {
  Connections.connectionsPOST(req.swagger.params, res, next);
};

module.exports.connectionsPUT = function connectionsPUT (req, res, next) {
  Connections.connectionsPUT(req.swagger.params, res, next);
};
