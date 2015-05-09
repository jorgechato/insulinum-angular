'use strict';

angular.module('insulinum')
.controller('mainController', function ($scope,$http,$timeout) {

    $scope.controlsAPI = [];

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    $http.get('assets/colors.json').success(function(data) {
        $scope.colors = data;
    });

    var retrieveItems = function () {
        $http.get('http://localhost:5000/api/controls')
            .success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.controlsAPI = data.controls;
                $timeout(retrieveItems, 50000);
            })
            .error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // alert('bad')
        });
    }

    retrieveItems();

    var labelsChart = [],
        insulinChart = [],
        glucoseChart = [];

    $scope.$watch('controlsAPI', function() {
        labelsChart = [];
        insulinChart = [];
        glucoseChart = [];

        $scope.controlsLength = $scope.controlsAPI.length;

        function avg(){
            var total = 0;
            angular.forEach($scope.controlsAPI, function(control) {
                // if(control.date == )
                    total += control.glucose;
            });

            return total/$scope.controlsAPI.length;
        }

        $scope.avgWeek = avg(1);

        $scope.avgMonth = avg();

        angular.forEach($scope.controlsAPI, function(control) {
            // var dateChart = control.date.getMonth() + "/" + control.date.getDay()
            labelsChart.push(monthNames[new Date(control.date).getMonth()] + " " + new Date(control.date).getUTCDate());
            insulinChart.push(control.insulin);
            glucoseChart.push(control.glucose);
        });

        $scope.labels = labelsChart;

        $scope.data = [
            insulinChart,
            glucoseChart
        ];
   });

    $scope.series = ['Insulin', 'Glucose'];

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

    $timeout(function(){
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }, 3000);

});
