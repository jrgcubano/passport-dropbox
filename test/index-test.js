var vows = require('vows');
var assert = require('assert');
var util = require('util');
var dropbox = require('passport-dropbox');


vows.describe('passport-dropbox').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(dropbox.version);
    },
  },
  
}).export(module);
