'use strict';

exports.peopleDELETE = function(args, res, next) {
  /**
   * Delete specified people.
   * Delete specified people.
   *
   * peopleDelete List An array containing the IDs or names of one or more people to delete from the people collection.  Use either this request body or the provided query args to select which people you want to delete.  WARNING: A DELETE call to this URI with no particular people specified will cause ALL people to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.peopleGET = function(args, res, next) {
  /**
   * Get the collection of people with their info.
   * Get the collection of people with their info.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns People
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
  "peopleCount" : 123,
  "prev" : {
    "link" : "aeiou"
  },
  "link" : "aeiou",
  "limit" : 123,
  "people" : [ {
    "citiesCount" : 123,
    "rolesCount" : 123,
    "cities" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "roles" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123,
    "bands" : [ {
      "rolesCount" : 123,
      "roles" : [ {
        "link" : "aeiou",
        "name" : "aeiou",
        "from" : "2000-01-23",
        "until" : "2000-01-23",
        "id" : 123
      } ],
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "bandsCount" : 123
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

exports.peoplePATCH = function(args, res, next) {
  /**
   * Modify or add the specified person or people.
   * Modify or add the specified person or people.  Specify the person/people to be modified/added using person id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * peoplePatch List An array containing one or more partial person objects specified by id or name along with the fields you want to modify and their new values.  If you specify any people by name that are not found in the collection already, they will be added instead of modified.  If you are modifying nested person info represented by an array, like the \"cities\" array inside a person object, you must specify an entire new \"cities\" array to replace the old one.
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
  "citiesCount" : 123,
  "rolesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "roles" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "from" : "2000-01-23",
  "until" : "2000-01-23",
  "id" : 123,
  "bands" : [ {
    "rolesCount" : 123,
    "roles" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.peoplePOST = function(args, res, next) {
  /**
   * Submit a new person or people.
   * Submit a new person or people to the people collection.  People must be submitted in an array, even if there is only one.
   *
   * people List An array containing one or more people to add to the people collection.
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
  "citiesCount" : 123,
  "rolesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "roles" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "from" : "2000-01-23",
  "until" : "2000-01-23",
  "id" : 123,
  "bands" : [ {
    "rolesCount" : 123,
    "roles" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.peoplePUT = function(args, res, next) {
  /**
   * Replace or add the specified people.
   * Replace or add the specified person or people.  Specify the person/people to be replaced/added using person id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * peoplePut List An array containing one or more people specified by id or name.  If you specify a person by name that is not found in the collection already, they will be added instead of replaced.
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
  "citiesCount" : 123,
  "rolesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "roles" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "from" : "2000-01-23",
  "until" : "2000-01-23",
  "id" : 123,
  "bands" : [ {
    "rolesCount" : 123,
    "roles" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.peoplePersonDELETE = function(args, res, next) {
  /**
   * Delete the specified person.
   * Delete the specified person.
   *
   * person String The ID or name of the target person.  If you are specifying the person by name, preserve any spaces between words in their name in the URL - they will be processed normally.
   * no response value expected for this operation
   **/
  res.end();
}

exports.peoplePersonGET = function(args, res, next) {
  /**
   * Get the specified person.
   * Get the specified person with their info.
   *
   * person String The ID or name of the target person.  If you are specifying the person by name, preserve any spaces between words in their name in the URL - they will be processed normally.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Person
   **/
  var examples = {};
  examples['application/json'] = {
  "citiesCount" : 123,
  "rolesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "roles" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "from" : "2000-01-23",
  "until" : "2000-01-23",
  "id" : 123,
  "bands" : [ {
    "rolesCount" : 123,
    "roles" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.peoplePersonPATCH = function(args, res, next) {
  /**
   * Modify the specified person.
   * Modify the specified person.
   *
   * person String The ID or name of the target person.  If you are specifying the person by name, preserve any spaces between words in their name in the URL - they will be processed normally.
   * personPatch PersonInput An object containing one or more fields to modify on the specified person.  If you are modifying nested person info represented by an array, like the \"cities\" array inside a person object, you must specify an entire new \"cities\" array to replace the old one.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Person
   **/
  var examples = {};
  examples['application/json'] = {
  "citiesCount" : 123,
  "rolesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "roles" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "from" : "2000-01-23",
  "until" : "2000-01-23",
  "id" : 123,
  "bands" : [ {
    "rolesCount" : 123,
    "roles" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.peoplePersonPUT = function(args, res, next) {
  /**
   * Replace the specified person.
   * Replace the specified person.
   *
   * person String The ID or name of the target person.  If you are specifying the person by name, preserve any spaces between words in their name in the URL - they will be processed normally.
   * personPut PersonInput A new person to replace the specified person.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Person
   **/
  var examples = {};
  examples['application/json'] = {
  "citiesCount" : 123,
  "rolesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "roles" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "from" : "2000-01-23",
  "until" : "2000-01-23",
  "id" : 123,
  "bands" : [ {
    "rolesCount" : 123,
    "roles" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "bandsCount" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

