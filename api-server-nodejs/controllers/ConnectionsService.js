'use strict';

exports.connectionsConnectionDELETE = function(args, res, next) {
  /**
   * Delete the specified connection.
   * Delete the specified connection.
   *
   * connection String A specification of the target connection.  In the URL, a connection can be specified in either of two ways: canonical id (like \"123-456\"), or name id (like \"band a-band b\").  The ordering of bands in either way does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  If you are specifying bands by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * no response value expected for this operation
   **/
  res.end();
}

exports.connectionsConnectionGET = function(args, res, next) {
  /**
   * Get the specified connection.
   * Get the specified connection.
   *
   * connection String A specification of the target connection.  In the URL, a connection can be specified in either of two ways: canonical id (like \"123-456\"), or name id (like \"band a-band b\").  The ordering of bands in either way does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  If you are specifying bands by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Connection
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "description" : "aeiou",
  "id" : "aeiou",
  "band1" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "band2" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.connectionsConnectionPATCH = function(args, res, next) {
  /**
   * Modify the specified connection.
   * Modify the specified connection.
   *
   * connection String A specification of the target connection.  In the URL, a connection can be specified in either of two ways: canonical id (like \"123-456\"), or name id (like \"band a-band b\").  The ordering of bands in either way does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  If you are specifying bands by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * connectionPatch ConnectionInput An object containing the field to modify.  Only a connection's \"description\" field can be modified.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Connection
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "description" : "aeiou",
  "id" : "aeiou",
  "band1" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "band2" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.connectionsConnectionPUT = function(args, res, next) {
  /**
   * Replace the specified connection.
   * Replace the specified connection.
   *
   * connection String A specification of the target connection.  In the URL, a connection can be specified in either of two ways: canonical id (like \"123-456\"), or name id (like \"band a-band b\").  The ordering of bands in either way does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  If you are specifying bands by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * connectionPut ConnectionInput A new connection to replace the specified connection.  Only the \"description\" field can differ from the old one.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Connection
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "description" : "aeiou",
  "id" : "aeiou",
  "band1" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "band2" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.connectionsDELETE = function(args, res, next) {
  /**
   * Delete specified connection(s).
   * Delete specified connection(s).  Connections can be specified in any of three ways in the request body array: canonical id (like \"123-456\"), name id (like \"band a-band b\", also supplied in the \"id\" field) or by including either the id or name of both \"band1\" and \"band2\" fields in the object.  They can also be specified in the \"ids\" query argument by either of the first two ways.  The ordering of bands in any of the ways does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").
   *
   * connectionsDelete List An array specifying which connections to delete.  Connections can be specified in any of three ways: canonical id (like \"123-456\"), name id (like \"band a-band b\", also supplied in the \"id\" field) or by including either the id or name of both \"band1\" and \"band2\" fields in the object.  The ordering of bands in any of the three ways does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  Use either this request body or the provided query args to select which connections you want to delete.  WARNING: A DELETE call to this URI with no particular connections specified will cause ALL connections to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.connectionsGET = function(args, res, next) {
  /**
   * Get the collection of band connections (for example from shared members).
   * Get the collection of band connections (for example from shared members).
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Connections
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : {
    "link" : "aeiou"
  },
  "total" : 123,
  "offset" : 123,
  "last" : {
    "link" : "aeiou"
  },
  "prev" : {
    "link" : "aeiou"
  },
  "link" : "aeiou",
  "limit" : 123,
  "connectionsCount" : 123,
  "connections" : [ {
    "link" : "aeiou",
    "description" : "aeiou",
    "id" : "aeiou",
    "band1" : {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    },
    "band2" : ""
  } ],
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

exports.connectionsPATCH = function(args, res, next) {
  /**
   * Modify or add the specified connection(s).
   * Modify or add the specified connection(s).  Existing connections can be specified in any of three ways: canonical id (like \"123-456\"), name id (like \"band a-band b\", also supplied in the \"id\" field) or by including either the id or name of both \"band1\" and \"band2\" fields in the object.  The ordering of bands in any of the three methods does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  Only a connection's description can be modified, not its bands.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * connectionsPatch List An array containing one or more existing or new connections.  Existing connections can be specified in any of three ways: canonical id (like \"123-456\"), name id (like \"band a-band b\", also supplied in the \"id\" field) or by including either the id or name of both \"band1\" and \"band2\" fields in the object.  The ordering of bands in any of the three methods does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  Only a connection's description can be modified, not its bands.
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
  "description" : "aeiou",
  "id" : "aeiou",
  "band1" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "band2" : ""
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.connectionsPOST = function(args, res, next) {
  /**
   * Submit a new connection or connections.
   * Submit a new connection or connections to the connections collection.  Connections must be submitted in an array, even if there is only one.
   *
   * connections List An array containing one or more connections to add to the connections collection.
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
  "description" : "aeiou",
  "id" : "aeiou",
  "band1" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "band2" : ""
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.connectionsPUT = function(args, res, next) {
  /**
   * Replace or add connection(s).
   * Replace or add the specified connection(s).  Existing connections can be specified in any of three ways: canonical id (like \"123-456\"), name id (like \"band a-band b\", also supplied in the \"id\" field) or by including either the id or name of both \"band1\" and \"band2\" fields in the object.  The ordering of bands in any of the three methods does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  Because of this, only a connection's description can be replaced, not its bands.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * connectionPut List An array containing one or more connections to replace or add.  Existing connections can be specified in any of three ways: canonical id (like \"123-456\"), name id (like \"band a-band b\", also supplied in the \"id\" field) or by including either the id or name of both \"band1\" and \"band2\" fields in the object.  The ordering of bands in any of the three methods does not matter (that is, \"band a-band b\" will address the same connection as \"band b-band a\").  Because of this, only a connection's description can be replaced, not its bands.  If you specify a connection that is not found in the collection already, it will be added instead of replaced.
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
  "description" : "aeiou",
  "id" : "aeiou",
  "band1" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "band2" : ""
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

