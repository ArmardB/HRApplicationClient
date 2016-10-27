'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
<<<<<<< HEAD
  beforeEach(module('hrappApp'));
=======
  beforeEach(module('hrappFrontEndApp'));
>>>>>>> cdae478b0d00cf92a8e4600bf8a05e8a27016a84

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});
