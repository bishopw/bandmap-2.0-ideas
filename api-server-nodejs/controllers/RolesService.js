'use strict';

exports.rolesDELETE = function(args, res, next) {
  /**
   * Delete specified role(s).
   * Delete specified role(s).
   *
   * rolesDelete List An array containing the IDs or names of one or more roles to delete from the roles collection.  Use either this request body or the provided query args to select which roles you want to delete.  WARNING: A DELETE call to this URI with no particular roles specified will cause ALL roles to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.rolesGET = function(args, res, next) {
  /**
   * Get the collection of band roles (instruments played, etc.).
   * Get the collection of band roles (instruments played, etc.).
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Roles
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : {
    "link" : "aeiou"
  },
  "total" : 123,
  "offset" : 123,
  "rolesCount" : 123,
  "last" : {
    "link" : "aeiou"
  },
  "roles" : [ {
    "peopleCount" : 123,
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123,
    "bands" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "bandsCount" : 123,
    "people" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ]
  } ],
  "prev" : {
    "link" : "aeiou"
  },
  "link" : "aeiou",
  "limit" : 123,
  "first" : {
    "link" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rolesPATCH = function(args, res, next) {
  /**
   * Modify or add the specified role(s).
   * Modify or add the specified role(s).  Specify the role(s) to be modified/added using role id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * rolesPatch List An array containing one or more partial role objects specified by id or name along with the fields you want to modify and their new values.  If you specify any roles by name that are not found in the collection already, they will be added instead of modified.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "bands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123,
  "people" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ]
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rolesPOST = function(args, res, next) {
  /**
   * Submit a new role or roles.
   * Submit a new role or roles to the roles collection.  Roles must be submitted in an array, even if there is only one.
   *
   * roles List An array containing one or more roles to add to the roles collection.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "bands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123,
  "people" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ]
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rolesPUT = function(args, res, next) {
  /**
   * Replace or add the specified role(s).
   * Replace or add the specified role(s).  Specify the role(s) to be replaced/added using role id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * rolesPut List An array containing one or more roles specified by id or name.  If you specify a role by name that is not found in the collection already, it will be added instead of replaced.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "bands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123,
  "people" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ]
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rolesRoleDELETE = function(args, res, next) {
  /**
   * Delete the specified role.
   * Delete the specified role.
   *
   * role String The ID or name of the target role.  If you are specifying the role by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * no response value expected for this operation
   **/
  res.end();
}

exports.rolesRoleGET = function(args, res, next) {
  /**
   * Get the specified role.
   * Get the specified role with its info.
   *
   * role String The ID or name of the target role.  If you are specifying the role by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Role
   **/
  var examples = {};
  examples['application/json'] = {
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "bands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123,
  "people" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rolesRolePATCH = function(args, res, next) {
  /**
   * Modify the specified role.
   * Modify the specified role.
   *
   * role String The ID or name of the target role.  If you are specifying the role by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * rolePatch RoleInput An object containing one or more fields to modify on the specified role.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Role
   **/
  var examples = {};
  examples['application/json'] = {
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "bands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123,
  "people" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rolesRolePUT = function(args, res, next) {
  /**
   * Replace the specified role.
   * Replace the specified role.
   *
   * role String The ID or name of the target role.  If you are specifying the role by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * rolePut RoleInput A new role to replace the specified role.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Role
   **/
  var examples = {};
  examples['application/json'] = {
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "bands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123,
  "people" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

