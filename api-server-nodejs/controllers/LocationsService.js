'use strict';

exports.locationsCitiesCityDELETE = function(args, res, next) {
  /**
   * Delete the specified city.
   * Delete the specified city.
   *
   * city String The ID or name of the target city.  If you are specifying the city by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * no response value expected for this operation
   **/
  res.end();
}

exports.locationsCitiesCityGET = function(args, res, next) {
  /**
   * Get the specified city.
   * Get the specified city with its info.
   *
   * city String The ID or name of the target city.  If you are specifying the city by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns City
   **/
  var examples = {};
  examples['application/json'] = {
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "state" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsCitiesCityPATCH = function(args, res, next) {
  /**
   * Modify the specified city.
   * Modify the specified city.
   *
   * city String The ID or name of the target city.  If you are specifying the city by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * cityPatch CityInput An object containing one or more fields to modify on the specified city.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns City
   **/
  var examples = {};
  examples['application/json'] = {
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "state" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsCitiesCityPUT = function(args, res, next) {
  /**
   * Replace the specified city.
   * Replace the specified city.
   *
   * city String The ID or name of the target city.  If you are specifying the city by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * cityPut CityInput A new city to replace the specified city.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns City
   **/
  var examples = {};
  examples['application/json'] = {
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "state" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsCitiesDELETE = function(args, res, next) {
  /**
   * Delete specified city(s).
   * Delete specified city(s).
   *
   * citiesDelete List An array containing the IDs or names of one or more cities to delete from the cities collection.  Use either this request body or the provided query args to select which cities you want to delete.  WARNING: A DELETE call to this URI with no particular cities specified will cause ALL cities to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.locationsCitiesGET = function(args, res, next) {
  /**
   * Get the collection of cities.
   * Get the collection of cities.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Cities
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : {
    "link" : "aeiou"
  },
  "total" : 123,
  "citiesCount" : 123,
  "offset" : 123,
  "cities" : [ {
    "country" : {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    },
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123,
    "state" : {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    }
  } ],
  "last" : {
    "link" : "aeiou"
  },
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

exports.locationsCitiesPATCH = function(args, res, next) {
  /**
   * Modify or add the specified city(s).
   * Modify or add the specified city(s).  Specify the city(s) to be modified/added using city id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * citiesPatch List An array containing one or more partial city objects specified by id or name along with the fields you want to modify and their new values.  If you specify any cities by name that are not found in the collection already, they will be added instead of modified.
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
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "state" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  }
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsCitiesPOST = function(args, res, next) {
  /**
   * Submit a new city or cities.
   * Submit a new city or cities to the cities collection.  Cities must be submitted in an array, even if there is only one.
   *
   * cities List An array containing one or more cities to add to the cities collection.
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
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "state" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  }
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsCitiesPUT = function(args, res, next) {
  /**
   * Replace or add the specified city(s).
   * Replace or add the specified city(s).  Specify the city(s) to be replaced/added using city id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * citiesPut List An array containing one or more cities specified by id or name.  If you specify a city by name that is not found in the collection already, it will be added instead of replaced.
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
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "state" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  }
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsCountriesCountryDELETE = function(args, res, next) {
  /**
   * Delete the specified country.
   * Delete the specified country.
   *
   * country String The ID or name of the target country.  If you are specifying the country by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * no response value expected for this operation
   **/
  res.end();
}

exports.locationsCountriesCountryGET = function(args, res, next) {
  /**
   * Get the specified country.
   * Get the specified country with its info.
   *
   * country String The ID or name of the target country.  If you are specifying the country by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Country
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsCountriesCountryPATCH = function(args, res, next) {
  /**
   * Modify the specified country.
   * Modify the specified country.
   *
   * country String The ID or name of the target country.  If you are specifying the country by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * countryPatch CountryInput An object containing one or more fields to modify on the specified country.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Country
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsCountriesCountryPUT = function(args, res, next) {
  /**
   * Replace the specified country.
   * Replace the specified country.
   *
   * country String The ID or name of the target country.  If you are specifying the country by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * countryPut CountryInput A new country to replace the specified country.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Country
   **/
  var examples = {};
  examples['application/json'] = {
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsCountriesDELETE = function(args, res, next) {
  /**
   * Delete specified country(s).
   * Delete specified country(s).
   *
   * countriesDelete List An array containing the IDs or names of one or more countries to delete from the countries collection.  Use either this request body or the provided query args to select which countries you want to delete.  WARNING: A DELETE call to this URI with no particular countries specified will cause ALL countries to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.locationsCountriesGET = function(args, res, next) {
  /**
   * Get the collection of countries.
   * Get the collection of countries.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Countries
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
  "countriesCount" : 123,
  "prev" : {
    "link" : "aeiou"
  },
  "link" : "aeiou",
  "limit" : 123,
  "countries" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123,
    "statesCount" : 123,
    "states" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    } ]
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

exports.locationsCountriesPATCH = function(args, res, next) {
  /**
   * Modify or add the specified country(s).
   * Modify or add the specified country(s).  Specify the country(s) to be modified/added using country id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * countriesPatch List An array containing one or more partial country objects specified by id or name along with the fields you want to modify and their new values.  If you specify any countries by name that are not found in the collection already, they will be added instead of modified.
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
  "name" : "aeiou",
  "id" : 123,
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsCountriesPOST = function(args, res, next) {
  /**
   * Submit a new country or countries.
   * Submit a new country or countries to the countries collection.  Countries must be submitted in an array, even if there is only one.
   *
   * countries List An array containing one or more countries to add to the countries collection.
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
  "name" : "aeiou",
  "id" : 123,
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsCountriesPUT = function(args, res, next) {
  /**
   * Replace or add the specified country(s).
   * Replace or add the specified country(s).  Specify the country(s) to be replaced/added using country id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * countriesPut List An array containing one or more countries specified by id or name.  If you specify a country by name that is not found in the collection already, it will be added instead of replaced.
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
  "name" : "aeiou",
  "id" : 123,
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsRegionsDELETE = function(args, res, next) {
  /**
   * Delete specified region(s).
   * Delete specified region(s).
   *
   * regionsDelete List An array containing the IDs or names of one or more regions to delete from the regions collection.  Use either this request body or the provided query args to select which regions you want to delete.  WARNING: A DELETE call to this URI with no particular regions specified will cause ALL regions to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.locationsRegionsGET = function(args, res, next) {
  /**
   * Get the collection of regions.
   * Get the collection of regions.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns Regions
   **/
  var examples = {};
  examples['application/json'] = {
  "next" : {
    "link" : "aeiou"
  },
  "total" : 123,
  "regions" : [ {
    "subRegions" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    } ],
    "citiesCount" : 123,
    "cities" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    } ],
    "countriesCount" : 123,
    "subRegionsCount" : 123,
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123,
    "countries" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    } ],
    "statesCount" : 123,
    "states" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    } ]
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

exports.locationsRegionsPATCH = function(args, res, next) {
  /**
   * Modify or add the specified region(s).
   * Modify or add the specified region(s).  Specify the region(s) to be modified/added using region id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * regionsPatch List An array containing one or more partial region objects specified by id or name along with the fields you want to modify and their new values.  If you specify any regions by name that are not found in the collection already, they will be added instead of modified.
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
  "subRegions" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "countriesCount" : 123,
  "subRegionsCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "countries" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsRegionsPOST = function(args, res, next) {
  /**
   * Submit a new region or regions.
   * Submit a new region or regions to the regions collection.  Regions must be submitted in an array, even if there is only one.
   *
   * regions List An array containing one or more regions to add to the regions collection.
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
  "subRegions" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "countriesCount" : 123,
  "subRegionsCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "countries" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsRegionsPUT = function(args, res, next) {
  /**
   * Replace or add the specified region(s).
   * Replace or add the specified region(s).  Specify the region(s) to be replaced/added using region id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * regionsPut List An array containing one or more regions specified by id or name.  If you specify a region by name that is not found in the collection already, it will be added instead of replaced.
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
  "subRegions" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "countriesCount" : 123,
  "subRegionsCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "countries" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsRegionsRegionDELETE = function(args, res, next) {
  /**
   * Delete the specified region.
   * Delete the specified region.
   *
   * region String The ID or name of the target region.  If you are specifying the region by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * no response value expected for this operation
   **/
  res.end();
}

exports.locationsRegionsRegionGET = function(args, res, next) {
  /**
   * Get the specified region.
   * Get the specified region with its info.
   *
   * region String The ID or name of the target region.  If you are specifying the region by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Region
   **/
  var examples = {};
  examples['application/json'] = {
  "subRegions" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "countriesCount" : 123,
  "subRegionsCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "countries" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsRegionsRegionPATCH = function(args, res, next) {
  /**
   * Modify the specified region.
   * Modify the specified region.
   *
   * region String The ID or name of the target region.  If you are specifying the region by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * regionPatch RegionInput An object containing one or more fields to modify on the specified region.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Region
   **/
  var examples = {};
  examples['application/json'] = {
  "subRegions" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "countriesCount" : 123,
  "subRegionsCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "countries" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsRegionsRegionPUT = function(args, res, next) {
  /**
   * Replace the specified region.
   * Replace the specified region.
   *
   * region String The ID or name of the target region.  If you are specifying the region by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * regionPut RegionInput A new region to replace the specified region.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns Region
   **/
  var examples = {};
  examples['application/json'] = {
  "subRegions" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "countriesCount" : 123,
  "subRegionsCount" : 123,
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123,
  "countries" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "statesCount" : 123,
  "states" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsStatesDELETE = function(args, res, next) {
  /**
   * Delete specified state(s).
   * Delete specified state(s).
   *
   * statesDelete List An array containing the IDs or names of one or more states to delete from the states collection.  Use either this request body or the provided query args to select which states you want to delete.  WARNING: A DELETE call to this URI with no particular states specified will cause ALL states to be deleted and the ENTIRE collection to be cleared. (optional)
   * ids List A comma-delimited list of IDs specifying the targets in this collection to operate on. (optional)
   * names List A comma-delimited list of names specifying the targets in this collection to operate on. (optional)
   * filter String A filter expression for filtering target objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values.  The objects in this collection targeted by the filter will be operated on. (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.locationsStatesGET = function(args, res, next) {
  /**
   * Get the collection of states, provinces, prefectures, or other administrative areas.
   * Get the collection of states, provinces, prefectures, or other administrative areas.
   *
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * filter String A filter expression for filtering returned objects.  Works as described in the [Microsoft API Guidelines](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering), and additionally allows a 'contains' or 'ct' operator for filtering on string field values. (optional)
   * sort List A comma-delimited list of fields to sort returned objects on, where the first specified field will be the primary sort, second field will be the secondary sort, and so on.  Use <field>:asc or <field>:desc to specify ascending or descending sorts, ascending is default. (optional)
   * limit Integer The maximum number of objects to return at once. (optional)
   * offset Integer Used to begin retrieving results from the middle of a collection, a zero-based offset from the start of the collection. (optional)
   * returns States
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
  "statesCount" : 123,
  "first" : {
    "link" : "aeiou"
  },
  "states" : [ {
    "country" : {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    },
    "citiesCount" : 123,
    "cities" : [ {
      "link" : "aeiou",
      "name" : "aeiou",
      "id" : 123
    } ],
    "link" : "aeiou",
    "name" : "aeiou",
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

exports.locationsStatesPATCH = function(args, res, next) {
  /**
   * Modify or add the specified state(s).
   * Modify or add the specified state(s).  Specify the state(s) to be modified/added using state id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * statesPatch List An array containing one or more partial state objects specified by id or name along with the fields you want to modify and their new values.  If you specify any states by name that are not found in the collection already, they will be added instead of modified.
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
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsStatesPOST = function(args, res, next) {
  /**
   * Submit one or more new states/provinces/prefectures.
   * Submit one or more new states/provinces/prefectures to the states collection.  They must be submitted in an array, even if there is only one.
   *
   * states List An array containing one or more states/provinces/prefectures to add to the states collection.
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
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsStatesPUT = function(args, res, next) {
  /**
   * Replace or add the specified state(s).
   * Replace or add the specified state(s).  Specify the state(s) to be replaced/added using state id or name.  The query args for this operation apply only to the returned array confirming your changes.
   *
   * statesPut List An array containing one or more states specified by id or name.  If you specify a state by name that is not found in the collection already, it will be added instead of replaced.
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
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsStatesStateDELETE = function(args, res, next) {
  /**
   * Delete the specified state/province/prefecture.
   * Delete the specified state/province/prefecture.
   *
   * state String The ID or name of the target state/province/prefecture (state names are typically abbreviated, like \"WA\" for \"Washington\").  If you are specifying by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * no response value expected for this operation
   **/
  res.end();
}

exports.locationsStatesStateGET = function(args, res, next) {
  /**
   * Get the specified state/province/prefecture.
   * Get the specified state/province/prefecture with its info.
   *
   * state String The ID or name of the target state/province/prefecture (state names are typically abbreviated, like \"WA\" for \"Washington\").  If you are specifying by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns State
   **/
  var examples = {};
  examples['application/json'] = {
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsStatesStatePATCH = function(args, res, next) {
  /**
   * Modify the specified state/province/prefecture.
   * Modify the specified state/province/prefecture.
   *
   * state String The ID or name of the target state/province/prefecture (state names are typically abbreviated, like \"WA\" for \"Washington\").  If you are specifying by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * statePatch StateInput An object containing one or more fields to modify on the specified state.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns State
   **/
  var examples = {};
  examples['application/json'] = {
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.locationsStatesStatePUT = function(args, res, next) {
  /**
   * Replace the specified state/province/prefecture.
   * Replace the specified state/province/prefecture.
   *
   * state String The ID or name of the target state/province/prefecture (state names are typically abbreviated, like \"WA\" for \"Washington\").  If you are specifying by name, preserve any spaces between words in the name in the URL - they will be processed normally.
   * statePut StateInput A new state to replace the specified state.
   * expand List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Objects specified by these fields will be expanded. (optional)
   * fields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  Only the fields specified will be returned. (optional)
   * noFields List A comma-delimited list of fields (attributes) of the objects or nested sub-objects returned at this resource.  Dot notation (like field.subfield) can be used to address nested sub-object fields.  The fields specified will not be returned. (optional)
   * returns State
   **/
  var examples = {};
  examples['application/json'] = {
  "country" : {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  },
  "citiesCount" : 123,
  "cities" : [ {
    "link" : "aeiou",
    "name" : "aeiou",
    "id" : 123
  } ],
  "link" : "aeiou",
  "name" : "aeiou",
  "id" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

