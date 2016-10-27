'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
<<<<<<< HEAD
  beforeEach(module('hrappApp'));
=======
  beforeEach(module('hrappFrontEndApp'));
>>>>>>> cdae478b0d00cf92a8e4600bf8a05e8a27016a84

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.awesomeThings.length).toBe(3);
  });
});
