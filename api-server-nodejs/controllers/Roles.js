'use strict';

var url = require('url');

var Roles = require('./RolesService');

module.exports.rolesDELETE = function rolesDELETE (req, res, next) {
  Roles.rolesDELETE(req.swagger.params, res, next);
};

module.exports.rolesGET = function rolesGET (req, res, next) {
  Roles.rolesGET(req.swagger.params, res, next);
};

module.exports.rolesPATCH = function rolesPATCH (req, res, next) {
  Roles.rolesPATCH(req.swagger.params, res, next);
};

module.exports.rolesPOST = function rolesPOST (req, res, next) {
  Roles.rolesPOST(req.swagger.params, res, next);
};

module.exports.rolesPUT = function rolesPUT (req, res, next) {
  Roles.rolesPUT(req.swagger.params, res, next);
};

module.exports.rolesRoleDELETE = function rolesRoleDELETE (req, res, next) {
  Roles.rolesRoleDELETE(req.swagger.params, res, next);
};

module.exports.rolesRoleGET = function rolesRoleGET (req, res, next) {
  Roles.rolesRoleGET(req.swagger.params, res, next);
};

module.exports.rolesRolePATCH = function rolesRolePATCH (req, res, next) {
  Roles.rolesRolePATCH(req.swagger.params, res, next);
};

module.exports.rolesRolePUT = function rolesRolePUT (req, res, next) {
  Roles.rolesRolePUT(req.swagger.params, res, next);
};
