'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('insulinum'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
});
