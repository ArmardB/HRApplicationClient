'use strict';

/**
 * @ngdoc function
 * @name hrappFrontEndApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrappFrontEndApp
 */
angular.module('hrappFrontEndApp',[])
 .controller('AboutCtrl', ['$scope', '$http',
 function ($scope, $http){
   var timeCard = {
     "email": "",
     "startTime": "",
     "endTime": ""

   };
<<<<<<< HEAD
   $scope.response = [];
   $http.get("http://localhost:8080/timecard")
   .then(
     function(response){
       console.log(response.data);
       $scope.responses = response.data;
       console.log("yo");
     }
   );
 }
=======
   $scope.responses = [];
   $http.get("http://localhost:8080/timecard").success(function (response) {
                        
            $scope.responses = response.data;
            console.log(response);
        }).error(function(error) {
            console.log(error);
        });
 
 }


 
>>>>>>> cdae478b0d00cf92a8e4600bf8a05e8a27016a84
]);
