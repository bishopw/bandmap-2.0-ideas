'use strict';

exports.rootGET = function(args, res, next) {
  /**
   * Get general API info and a listing of resources available at the API root.
   * Get general API info and a listing of resources available at the API root.
   *
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * returns APIRootListing
   **/
  var examples = {};
  examples['application/json'] = {
  "description" : "aeiou",
  "resources" : {
    "roles" : {
      "link" : "aeiou",
      "description" : "aeiou"
    },
    "admin" : {
      "link" : "aeiou",
      "description" : "aeiou"
    },
    "locations" : {
      "link" : "aeiou",
      "description" : "aeiou"
    },
    "bands" : {
      "link" : "aeiou",
      "description" : "aeiou"
    },
    "people" : {
      "link" : "aeiou",
      "description" : "aeiou"
    },
    "connections" : {
      "link" : "aeiou",
      "description" : "aeiou"
    }
  },
  "version" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

