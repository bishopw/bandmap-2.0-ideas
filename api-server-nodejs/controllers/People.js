'use strict';

var url = require('url');

var People = require('./PeopleService');

module.exports.peopleDELETE = function peopleDELETE (req, res, next) {
  People.peopleDELETE(req.swagger.params, res, next);
};

module.exports.peopleGET = function peopleGET (req, res, next) {
  People.peopleGET(req.swagger.params, res, next);
};

module.exports.peoplePATCH = function peoplePATCH (req, res, next) {
  People.peoplePATCH(req.swagger.params, res, next);
};

module.exports.peoplePOST = function peoplePOST (req, res, next) {
  People.peoplePOST(req.swagger.params, res, next);
};

module.exports.peoplePUT = function peoplePUT (req, res, next) {
  People.peoplePUT(req.swagger.params, res, next);
};

module.exports.peoplePersonDELETE = function peoplePersonDELETE (req, res, next) {
  People.peoplePersonDELETE(req.swagger.params, res, next);
};

module.exports.peoplePersonGET = function peoplePersonGET (req, res, next) {
  People.peoplePersonGET(req.swagger.params, res, next);
};

module.exports.peoplePersonPATCH = function peoplePersonPATCH (req, res, next) {
  People.peoplePersonPATCH(req.swagger.params, res, next);
};

module.exports.peoplePersonPUT = function peoplePersonPUT (req, res, next) {
  People.peoplePersonPUT(req.swagger.params, res, next);
};
