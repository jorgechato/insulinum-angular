'use strict';

angular.module('insulinum')
.controller('mainController', function ($scope,$http,$timeout) {

    $http.get('assets/colors.json').success(function(data) {
        $scope.colors = data;
    });

    // Chart.defaults.global.colours = $scope.colors;

    $scope.controlsAPI = [
        {
            'date' : new Date(),
            'time' : new Date(),
            'glucose' : 140,
            'insulin' : 12,
            'type' : 'quickly',
            'daytime' : 'breakfast',
            'note' : 'something that happen in this control :smiley: is everything I whant #EverythingOK'
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

    $scope.switchButton = true;

    $scope.$watch('switchButton', function(){
        $scope.switchControlChart = $scope.switchButton ? 'Controls' : 'Charts';
    });

    $scope.toggleCustom = function() {
        $scope.switchButton = $scope.switchButton === false ? true: false;
    };

    $scope.chartCard = [
        {
            'id':'line',
            'class':'chart-line',
            'name':'Linear chart',
            'date' : new Date(),
            'time' : new Date(),
            'note' : 'something that happen <3 in this control is everything I whant #EverythingOK'
        },
        {
            'id':'bar',
            'class':'chart-bar',
            'name':'Bar chart',
            'date' : new Date(),
            'time' : new Date(),
            'note' : 'something that happen in :P this control is everything I whant #EverythingOK'
        },
        {
            'id':'radar',
            'class':'chart-radar',
            'name':'Radar chart',
            'date' : new Date(),
            'time' : new Date(),
            'note' : 'something that happen in :/ this control is everything I whant #EverythingOK'
        },
        {
            'id':'pie',
            'class':'chart-pie',
            'name':'Pie chart',
            'date' : new Date(),
            'time' : new Date(),
            'note' : 'something that happen in this control is everything I whant #EverythingOK'
        }
    ];


    // $timeout(function(){
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    // }, 3000);

    // $timeout(function(){
        $scope.series = ['Insulinum', 'Glucose'];
    // }, 3000);

    // $timeout(function(){
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
    // }, 3000);

    $timeout(function(){
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }, 3000);

});
