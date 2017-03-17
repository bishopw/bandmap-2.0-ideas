'use strict';

exports.bandsBandDELETE = function(args, res, next) {
  /**
   * Delete the specified band.
   * Delete the specified band.
   *
   * band String The ID or name of the target band.  If you are specifying the band by name, preserve any spaces between words in the band name in the URL - they will be processed normally.
   * no response value expected for this operation
   **/
  res.end();
}

exports.bandsBandGET = function(args, res, next) {
  /**
   * Get the specified band.
   * Get the specified band with its band info.
   *
   * band String The ID or name of the target band.  If you are specifying the band by name, preserve any spaces between words in the band name in the URL - they will be processed normally.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Band
   **/
  var examples = {};
  examples['application/json'] = {
  "clickCount" : 123,
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "connectedBands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123
  } ],
  "connectedBandsCount" : 123,
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "webLinks" : [ {
    "description" : "aeiou",
    "url" : "aeiou"
  } ],
  "id" : 123,
  "people" : [ {
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
  "webLinksCount" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.bandsBandPATCH = function(args, res, next) {
  /**
   * Modify the specified band.
   * Modify the specified band.
   *
   * band String The ID or name of the target band.  If you are specifying the band by name, preserve any spaces between words in the band name in the URL - they will be processed normally.
   * bandPatch BandInput An object containing one or more fields to modify on the specified band.  If you are modifying band info represented by an array, like the \"people\" array of band members and associated people, you must specify an entire new \"people\" array to replace the old one.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Band
   **/
  var examples = {};
  examples['application/json'] = {
  "clickCount" : 123,
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "connectedBands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123
  } ],
  "connectedBandsCount" : 123,
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "webLinks" : [ {
    "description" : "aeiou",
    "url" : "aeiou"
  } ],
  "id" : 123,
  "people" : [ {
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
  "webLinksCount" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.bandsBandPUT = function(args, res, next) {
  /**
   * Replace the specified band.
   * Replace the specified band.
   *
   * band String The ID or name of the target band.  If you are specifying the band by name, preserve any spaces between words in the band name in the URL - they will be processed normally.
   * bandPut BandInput A new band to replace the specified band.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Band
   **/
  var examples = {};
  examples['application/json'] = {
  "clickCount" : 123,
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "connectedBands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123
  } ],
  "connectedBandsCount" : 123,
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "webLinks" : [ {
    "description" : "aeiou",
    "url" : "aeiou"
  } ],
  "id" : 123,
  "people" : [ {
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
  "webLinksCount" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.bandsDELETE = function(args, res, next) {
  /**
   * Delete specified band(s).
   * Delete specified band(s).
   *
   * bandsDelete List An array containing the IDs or names of one or more bands to delete from the bands collection.  Use either this request body or the provided query args to select which bands you want to delete.  WARNING: A DELETE call to this URI with no particular bands specified will cause ALL bands to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.bandsGET = function(args, res, next) {
  /**
   * Get the collection of bands with band info.
   * Get the collection of bands with band info.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Bands
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
  "bands" : [ {
    "clickCount" : 123,
    "citiesCount" : 123,
    "cities" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "from" : "2000-01-23",
      "until" : "2000-01-23",
      "id" : 123
    } ],
    "connectedBands" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "description" : "aeiou",
      "id" : 123
    } ],
    "connectedBandsCount" : 123,
    "peopleCount" : 123,
    "link" : "aeiou",
    "name" : "aeiou",
    "webLinks" : [ {
      "description" : "aeiou",
      "url" : "aeiou"
    } ],
    "id" : 123,
    "people" : [ {
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
    "webLinksCount" : 123
  } ],
  "bandsCount" : 123,
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

exports.bandsPATCH = function(args, res, next) {
  /**
   * Modify or add the specified band(s).
   * Modify or add the specified band(s).  Specify the band or bands to be modified/added using band id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * bandsPatch List An array containing one or more partial band objects specified by id or name along with the fields you want to modify and their new values.  If you specify any bands by name that are not found in the collection already, they will be added instead of modified.  If you are modifying band info represented by an array, like the \"people\" array of band members and associated people, you must specify an entire new \"people\" array to replace the old one.
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
  "clickCount" : 123,
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "connectedBands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123
  } ],
  "connectedBandsCount" : 123,
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "webLinks" : [ {
    "description" : "aeiou",
    "url" : "aeiou"
  } ],
  "id" : 123,
  "people" : [ {
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
  "webLinksCount" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.bandsPOST = function(args, res, next) {
  /**
   * Submit a new band or bands.
   * Submit a new band or bands to the bands collection.  Bands must be submitted in an array, even if there is only one.
   *
   * bands List An array containing one or more bands to add to the bands collection.
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
  "clickCount" : 123,
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "connectedBands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123
  } ],
  "connectedBandsCount" : 123,
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "webLinks" : [ {
    "description" : "aeiou",
    "url" : "aeiou"
  } ],
  "id" : 123,
  "people" : [ {
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
  "webLinksCount" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.bandsPUT = function(args, res, next) {
  /**
   * Replace or add the specified band(s).
   * Replace or add the specified band(s).  Specify the band or bands to be replaced/added using band id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * bandsPut List An array containing one or more bands specified by id or name.  If you specify a band by name that is not found in the collection already, it will be added instead of replaced.
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
  "clickCount" : 123,
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "from" : "2000-01-23",
    "until" : "2000-01-23",
    "id" : 123
  } ],
  "connectedBands" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "id" : 123
  } ],
  "connectedBandsCount" : 123,
  "peopleCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "webLinks" : [ {
    "description" : "aeiou",
    "url" : "aeiou"
  } ],
  "id" : 123,
  "people" : [ {
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
  "webLinksCount" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

