'use strict';

angular.module('insulinum')
.controller('mainController', function ($scope) {
    $scope.controlsAPI = [
        {
            'date' : new Date(),
            'time' : new Date(),
            'glucose' : 140,
            'insulin' : 12,
            'type' : 'quickly',
            'daytime' : 'breakfast',
            'note' : 'something that happen in this control is everything I whant #EverythingOK'
        },
        {
            'date' : new Date(),
            'time' : new Date(),
            'glucose' : 130,
            'insulin' : 9,
            'type' : 'quickly',
            'daytime' : 'breakfast',
            'note' : 'something that happen in this control is everything I whant #EverythingOK'
        },
        {
            'date' : new Date(),
            'time' : new Date(),
            'glucose' : 150,
            'insulin' : 13,
            'type' : 'quickly',
            'daytime' : 'breakfast',
            'note' : 'something that happen in this control is everything I whant #EverythingOK'
        }
    ];

    $scope.controlsLength = $scope.controlsAPI.length;

    function avg(){
        var total = 0;
        angular.forEach($scope.controlsAPI, function(control) {
            // if(control.date == )
                total += control.glucose;
        });

        return total/$scope.controlsAPI.length;
    }

    $scope.avgWeek = avg();

    $scope.avgMonth = avg();

});