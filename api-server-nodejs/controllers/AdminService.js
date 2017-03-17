'use strict';

exports.adminAccountsAccountDELETE = function(args, res, next) {
  /**
   * Delete the specified account.
   * Delete the specified account.
   *
   * account String The ID or username of the target account.
   * no response value expected for this operation
   **/
  res.end();
}

exports.adminAccountsAccountGET = function(args, res, next) {
  /**
   * Get the specified account.
   * Get the specified account with its info.
   *
   * account String The ID or username of the target account.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Account
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "recentEditsCount" : 123,
  "type" : "aeiou",
  "totalSessionsCount" : 123,
  "identityType" : "aeiou",
  "recentSessions" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "person" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "isAccountDeleted" : true,
  "recentSessionsCount" : 123,
  "recentEdits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "isAccountVerified" : true,
  "id" : 123,
  "totalEditsCount" : 123,
  "email" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminAccountsAccountPATCH = function(args, res, next) {
  /**
   * Modify the specified account.
   * Modify the specified account.
   *
   * account String The ID or username of the target account.
   * accountPatch AccountInput An object containing one or more fields to modify on the specified account.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Account
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "recentEditsCount" : 123,
  "type" : "aeiou",
  "totalSessionsCount" : 123,
  "identityType" : "aeiou",
  "recentSessions" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "person" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "isAccountDeleted" : true,
  "recentSessionsCount" : 123,
  "recentEdits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "isAccountVerified" : true,
  "id" : 123,
  "totalEditsCount" : 123,
  "email" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminAccountsAccountPUT = function(args, res, next) {
  /**
   * Replace the specified account.
   * Replace the specified account.
   *
   * account String The ID or username of the target account.
   * accountPut AccountInput A new account to replace the specified account.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Account
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "recentEditsCount" : 123,
  "type" : "aeiou",
  "totalSessionsCount" : 123,
  "identityType" : "aeiou",
  "recentSessions" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "person" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "isAccountDeleted" : true,
  "recentSessionsCount" : 123,
  "recentEdits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "isAccountVerified" : true,
  "id" : 123,
  "totalEditsCount" : 123,
  "email" : "aeiou",
  "username" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminAccountsDELETE = function(args, res, next) {
  /**
   * Delete specified account(s).
   * Delete specified account(s).
   *
   * accountsDelete List An array containing the IDs or names of one or more accounts to delete from the accounts collection.  Use either this request body or the provided query args to select which accounts you want to delete.  WARNING: A DELETE call to this URI with no particular accounts specified will cause ALL accounts to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.adminAccountsGET = function(args, res, next) {
  /**
   * Get the collection of Band Map user accounts.
   * Get the collection of Band Map user accounts.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Accounts
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : {
    "link" : "aeiou"
  },
  "total" : 123,
  "regions" : [ {
    "link" : "aeiou",
    "recentEditsCount" : 123,
    "type" : "aeiou",
    "totalSessionsCount" : 123,
    "identityType" : "aeiou",
    "recentSessions" : [ {
      "link" : "aeiou",
      "id" : 123
    } ],
    "person" : {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    },
    "isAccountDeleted" : true,
    "recentSessionsCount" : 123,
    "recentEdits" : [ {
      "link" : "aeiou",
      "id" : 123
    } ],
    "isAccountVerified" : true,
    "id" : 123,
    "totalEditsCount" : 123,
    "email" : "aeiou",
    "username" : "aeiou"
  } ],
  "offset" : 123,
  "last" : {
    "link" : "aeiou"
  },
  "regionsCount" : 123,
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

exports.adminAccountsPATCH = function(args, res, next) {
  /**
   * Modify or add the specified account(s).
   * Modify or add the specified account(s).  Specify the account(s) to be modified/added using account id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * accountsPatch List An array containing one or more partial account objects specified by id or name along with the fields you want to modify and their new values.  If you specify any accounts by name that are not found in the collection already, they will be added instead of modified.
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
  "link" : "aeiou",
  "recentEditsCount" : 123,
  "type" : "aeiou",
  "totalSessionsCount" : 123,
  "identityType" : "aeiou",
  "recentSessions" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "person" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "isAccountDeleted" : true,
  "recentSessionsCount" : 123,
  "recentEdits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "isAccountVerified" : true,
  "id" : 123,
  "totalEditsCount" : 123,
  "email" : "aeiou",
  "username" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminAccountsPOST = function(args, res, next) {
  /**
   * Submit a new account or accounts.
   * Submit a new account or accounts to the accounts collection.  Accounts must be submitted in an array, even if there is only one.
   *
   * accounts List An array containing one or more accounts to add to the accounts collection.
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
  "link" : "aeiou",
  "recentEditsCount" : 123,
  "type" : "aeiou",
  "totalSessionsCount" : 123,
  "identityType" : "aeiou",
  "recentSessions" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "person" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "isAccountDeleted" : true,
  "recentSessionsCount" : 123,
  "recentEdits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "isAccountVerified" : true,
  "id" : 123,
  "totalEditsCount" : 123,
  "email" : "aeiou",
  "username" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminAccountsPUT = function(args, res, next) {
  /**
   * Replace or add the specified account(s).
   * Replace or add the specified account(s).  Specify the account(s) to be replaced/added using account id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * accountsPut List An array containing one or more accounts specified by id or name.  If you specify a account by name that is not found in the collection already, it will be added instead of replaced.
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
  "link" : "aeiou",
  "recentEditsCount" : 123,
  "type" : "aeiou",
  "totalSessionsCount" : 123,
  "identityType" : "aeiou",
  "recentSessions" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "person" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "isAccountDeleted" : true,
  "recentSessionsCount" : 123,
  "recentEdits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "isAccountVerified" : true,
  "id" : 123,
  "totalEditsCount" : 123,
  "email" : "aeiou",
  "username" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminEditsDELETE = function(args, res, next) {
  /**
   * Delete specified edit(s).
   * Delete specified edit(s).
   *
   * editsDelete List An array containing the IDs or names of one or more edits to delete from the edits collection.  Use either this request body or the provided query args to select which edits you want to delete.  WARNING: A DELETE call to this URI with no particular edits specified will cause ALL edits to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.adminEditsEditDELETE = function(args, res, next) {
  /**
   * Delete the specified edit.
   * Delete the specified edit.
   *
   * edit String The ID of the target edit.
   * no response value expected for this operation
   **/
  res.end();
}

exports.adminEditsEditGET = function(args, res, next) {
  /**
   * Get the specified edit.
   * Get the specified edit with its info.
   *
   * edit String The ID of the target edit.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Edit
   **/
  var examples = {};
  examples['application/json'] = {
  "newValue" : "aeiou",
  "targetRowId" : 123,
  "session" : {
    "link" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "column" : "aeiou",
  "description" : "aeiou",
  "id" : 123,
  "oldValue" : "aeiou",
  "type" : "aeiou",
  "table" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminEditsEditPATCH = function(args, res, next) {
  /**
   * Modify the specified edit.
   * Modify the specified edit.
   *
   * edit String The ID of the target edit.
   * editPatch EditInput An object containing one or more fields to modify on the specified edit.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Edit
   **/
  var examples = {};
  examples['application/json'] = {
  "newValue" : "aeiou",
  "targetRowId" : 123,
  "session" : {
    "link" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "column" : "aeiou",
  "description" : "aeiou",
  "id" : 123,
  "oldValue" : "aeiou",
  "type" : "aeiou",
  "table" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminEditsEditPUT = function(args, res, next) {
  /**
   * Replace the specified edit.
   * Replace the specified edit.
   *
   * edit String The ID of the target edit.
   * editPut EditInput A new edit to replace the specified edit.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Edit
   **/
  var examples = {};
  examples['application/json'] = {
  "newValue" : "aeiou",
  "targetRowId" : 123,
  "session" : {
    "link" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "column" : "aeiou",
  "description" : "aeiou",
  "id" : 123,
  "oldValue" : "aeiou",
  "type" : "aeiou",
  "table" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminEditsGET = function(args, res, next) {
  /**
   * Get the collection of app edits.
   * Get the collection of app edits.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Edits
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : {
    "link" : "aeiou"
  },
  "total" : 123,
  "regions" : [ {
    "newValue" : "aeiou",
    "targetRowId" : 123,
    "session" : {
      "link" : "aeiou",
      "id" : 123
    },
    "link" : "aeiou",
    "column" : "aeiou",
    "description" : "aeiou",
    "id" : 123,
    "oldValue" : "aeiou",
    "type" : "aeiou",
    "table" : "aeiou"
  } ],
  "offset" : 123,
  "last" : {
    "link" : "aeiou"
  },
  "regionsCount" : 123,
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

exports.adminEditsPATCH = function(args, res, next) {
  /**
   * Modify or add the specified edit(s).
   * Modify or add the specified edit(s).  Specify the edit(s) to be modified/added using edit id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * editsPatch List An array containing one or more partial edit objects specified by id or name along with the fields you want to modify and their new values.  If you specify any edits by name that are not found in the collection already, they will be added instead of modified.
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
  "newValue" : "aeiou",
  "targetRowId" : 123,
  "session" : {
    "link" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "column" : "aeiou",
  "description" : "aeiou",
  "id" : 123,
  "oldValue" : "aeiou",
  "type" : "aeiou",
  "table" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminEditsPOST = function(args, res, next) {
  /**
   * Submit a new edit or edits.
   * Submit a new edit or edits to the edits collection.  Edits must be submitted in an array, even if there is only one.
   *
   * edits List An array containing one or more edits to add to the edits collection.
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
  "newValue" : "aeiou",
  "targetRowId" : 123,
  "session" : {
    "link" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "column" : "aeiou",
  "description" : "aeiou",
  "id" : 123,
  "oldValue" : "aeiou",
  "type" : "aeiou",
  "table" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminEditsPUT = function(args, res, next) {
  /**
   * Replace or add the specified edit(s).
   * Replace or add the specified edit(s).  Specify the edit(s) to be replaced/added using edit id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * editsPut List An array containing one or more edits specified by id or name.  If you specify a edit by name that is not found in the collection already, it will be added instead of replaced.
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
  "newValue" : "aeiou",
  "targetRowId" : 123,
  "session" : {
    "link" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "column" : "aeiou",
  "description" : "aeiou",
  "id" : 123,
  "oldValue" : "aeiou",
  "type" : "aeiou",
  "table" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminSessionsDELETE = function(args, res, next) {
  /**
   * Delete specified session(s).
   * Delete specified session(s).
   *
   * sessionsDelete List An array containing the IDs or names of one or more sessions to delete from the sessions collection.  Use either this request body or the provided query args to select which sessions you want to delete.  WARNING: A DELETE call to this URI with no particular sessions specified will cause ALL sessions to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.adminSessionsGET = function(args, res, next) {
  /**
   * Get the collection of app sessions.
   * Get the collection of app sessions.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Sessions
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : {
    "link" : "aeiou"
  },
  "total" : 123,
  "regions" : [ {
    "editsCount" : 123,
    "edits" : [ {
      "link" : "aeiou",
      "id" : 123
    } ],
    "link" : "aeiou",
    "ipAddress" : "aeiou",
    "start" : "aeiou",
    "end" : "aeiou",
    "id" : 123,
    "account" : {
      "link" : "aeiou",
      "id" : 123,
      "username" : "aeiou"
    }
  } ],
  "offset" : 123,
  "last" : {
    "link" : "aeiou"
  },
  "regionsCount" : 123,
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

exports.adminSessionsPATCH = function(args, res, next) {
  /**
   * Modify or add the specified session(s).
   * Modify or add the specified session(s).  Specify the session(s) to be modified/added using session id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * sessionsPatch List An array containing one or more partial session objects specified by id or name along with the fields you want to modify and their new values.  If you specify any sessions by name that are not found in the collection already, they will be added instead of modified.
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
  "editsCount" : 123,
  "edits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "ipAddress" : "aeiou",
  "start" : "aeiou",
  "end" : "aeiou",
  "id" : 123,
  "account" : {
    "link" : "aeiou",
    "id" : 123,
    "username" : "aeiou"
  }
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminSessionsPOST = function(args, res, next) {
  /**
   * Submit a new session or sessions.
   * Submit a new session or sessions to the sessions collection.  Sessions must be submitted in an array, even if there is only one.
   *
   * sessions List An array containing one or more sessions to add to the sessions collection.
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
  "editsCount" : 123,
  "edits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "ipAddress" : "aeiou",
  "start" : "aeiou",
  "end" : "aeiou",
  "id" : 123,
  "account" : {
    "link" : "aeiou",
    "id" : 123,
    "username" : "aeiou"
  }
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminSessionsPUT = function(args, res, next) {
  /**
   * Replace or add the specified session(s).
   * Replace or add the specified session(s).  Specify the session(s) to be replaced/added using session id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * sessionsPut List An array containing one or more sessions specified by id or name.  If you specify a session by name that is not found in the collection already, it will be added instead of replaced.
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
  "editsCount" : 123,
  "edits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "ipAddress" : "aeiou",
  "start" : "aeiou",
  "end" : "aeiou",
  "id" : 123,
  "account" : {
    "link" : "aeiou",
    "id" : 123,
    "username" : "aeiou"
  }
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminSessionsSessionDELETE = function(args, res, next) {
  /**
   * Delete the specified session.
   * Delete the specified session.
   *
   * session String The ID of the target session.
   * no response value expected for this operation
   **/
  res.end();
}

exports.adminSessionsSessionGET = function(args, res, next) {
  /**
   * Get the specified session.
   * Get the specified session with its info.
   *
   * session String The ID of the target session.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Session
   **/
  var examples = {};
  examples['application/json'] = {
  "editsCount" : 123,
  "edits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "ipAddress" : "aeiou",
  "start" : "aeiou",
  "end" : "aeiou",
  "id" : 123,
  "account" : {
    "link" : "aeiou",
    "id" : 123,
    "username" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminSessionsSessionPATCH = function(args, res, next) {
  /**
   * Modify the specified session.
   * Modify the specified session.
   *
   * session String The ID of the target session.
   * sessionPatch SessionInput An object containing one or more fields to modify on the specified session.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Session
   **/
  var examples = {};
  examples['application/json'] = {
  "editsCount" : 123,
  "edits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "ipAddress" : "aeiou",
  "start" : "aeiou",
  "end" : "aeiou",
  "id" : 123,
  "account" : {
    "link" : "aeiou",
    "id" : 123,
    "username" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.adminSessionsSessionPUT = function(args, res, next) {
  /**
   * Replace the specified session.
   * Replace the specified session.
   *
   * session String The ID of the target session.
   * sessionPut SessionInput A new session to replace the specified session.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Session
   **/
  var examples = {};
  examples['application/json'] = {
  "editsCount" : 123,
  "edits" : [ {
    "link" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "ipAddress" : "aeiou",
  "start" : "aeiou",
  "end" : "aeiou",
  "id" : 123,
  "account" : {
    "link" : "aeiou",
    "id" : 123,
    "username" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

