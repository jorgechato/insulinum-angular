"use strict";angular.module("insulinum",["chart.js","ngSanitize","ngEmbed"]),angular.module("insulinum").controller("mainController",["$scope",function(t){function n(){var n=0;return angular.forEach(t.controlsAPI,function(t){n+=t.glucose}),n/t.controlsAPI.length}t.controlsAPI=[{date:new Date,time:new Date,glucose:140,insulin:12,type:"quickly",daytime:"breakfast",note:"something that happen in this control :smiley: is everything I whant #EverythingOK"},{date:new Date,time:new Date,glucose:130,insulin:9,type:"quickly",daytime:"breakfast",note:"something that happen in this control is everything I whant #EverythingOK"},{date:new Date,time:new Date,glucose:150,insulin:13,type:"quickly",daytime:"breakfast",note:"something that happen in this control is everything I whant #EverythingOK"}],t.controlsLength=t.controlsAPI.length,t.avgWeek=n(),t.avgMonth=n(),t.switchButton=!0,t.$watch("switchButton",function(){t.switchControlChart=t.switchButton?"Controls":"Charts"}),t.toggleCustom=function(){t.switchButton=t.switchButton===!1?!0:!1},t.chartCard=[{id:"line","class":"chart-line",name:"Linear chart",date:new Date,time:new Date,note:"something that happen <3 in this control is everything I whant #EverythingOK"},{id:"bar","class":"chart-bar",name:"Bar chart",date:new Date,time:new Date,note:"something that happen in :P this control is everything I whant #EverythingOK"},{id:"radar","class":"chart-radar",name:"Radar chart",date:new Date,time:new Date,note:"something that happen in this control is everything I whant #EverythingOK"},{id:"pie","class":"chart-pie",name:"Pie chart",date:new Date,time:new Date,note:"something that happen in this control is everything I whant #EverythingOK"}],t.labels=["January","February","March","April","May","June","July"],t.series=["Insulinum","Glucose"],t.data=[[65,59,80,81,56,55,40],[28,48,40,19,86,27,90]],t.onClick=function(t,n){console.log(t,n)}}]),angular.module("insulinum").filter("capitalize",function(){return function(t,n){return null!==t&&(t=t.toLowerCase()),t.substring(0,1).toUpperCase()+t.substring(1)}}),angular.module("insulinum").filter("tweetLinky",["$filter",function(t){return function(n,e){if(!n)return n;var a=t("linky")(n,e),i="";angular.isDefined(e)&&(i=' target="'+e+'"');var s=/(^|\s)#(\w*[a-zA-Z_]+\w*)/gim;a=n.replace(s,"$1<a >#$2</a>");var o=/(^|\s)\@(\w*[a-zA-Z_]+\w*)/gim;return a=a.replace(o,"$1<a >@$2</a>")}}]),$(document).on("ready",function(){NProgress.start()}),$(window).on("load",function(){NProgress.done()}),angular.module("app").run(["$templateCache",function(t){t.put("app/index.html",'<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Insulinum</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"><link rel="stylesheet" href="app/vendor.css"></head><body ng-app="insulinum"><div id="outer-wrapper" class="" ng-controller="mainController as main"><header class=""><div class="nav-buttons"><span><a href="/" class="active"><button class="clear icon index"></button></a></span> <span><a href="/" class=""><button class="clear icon index"></button></a></span></div></header><button class="get-app-button small">Get the app</button> <button class="login-link small">Doctor</button><div id="main-container"><div class="user-content"><div class="user-info"><div class="info"><div class="icon" style="background-image:url(\'../assets/img/image.jpg\')"></div><h2>Jorge Chato</h2><div class="metrics"><div class="controls"><div class="metrics-count" ng-bind="controlsLength | number"></div><div class="metrics-name">Controls</div></div><div class="week"><div class="metrics-count" ng-bind="avgWeek"></div><div class="metrics-name">Week</div></div><div class="month"><div class="metrics-count" ng-bind="avgMonth"></div><div class="metrics-name">Month</div></div></div><button class="control-button-large control" ng-click="toggleCustom()" ng-bind="switchControlChart"></button></div></div><div class="data-with"></div><div class="padding"></div></div><div class="user-data"><div class="data"><div class="data-center"><div class="post" ng-repeat="card in chartCard" ng-show="switchButton"><div class="card"><div class="card-header"><h4 ng-cloak="">{{card.name}} <span>{{ card.time | date:\'HH:mm:ss\'}} - {{ card.date | date:\'dd MMMM yyyy\'}}</span></h4></div><div class="graphic"><canvas ng-cloak="" id="{{card.id}}" class="chart-bar chart" ng-class="{{card.class}}" data="data" labels="labels" legend="true" series="series" click="onClick"></canvas></div><div class="card-content"><p ng-bind-html="card.note | tweetLinky:\'_blank\' | embed"></p><form class="comment-your-control"><input type="text" name="comment" maxlength="140" placeholder="Jorge say something about your control"></form></div></div></div><div class="post" ng-repeat="control in controlsAPI" ng-show="!switchButton"><div class="card"><div class="card-header"><h4 ng-cloak="">{{control.daytime | capitalize}} <span>{{ control.time | date:\'HH:mm:ss\'}} - {{ control.date | date:\'dd MMMM yyyy\'}}</span></h4></div><div class="graphic controls" ng-cloak="">{{control.glucose}}-{{control.type}}-{{control.insulin}}</div><div class="card-content"><p ng-bind-html="control.note | tweetLinky:\'_blank\' | embed"></p><form class="comment-your-control"><input type="text" name="comment" maxlength="140" placeholder="Jorge say something about your control"></form></div></div></div></div></div></div></div><footer></footer></div><script>\n      (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n      e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n      e.src=\'//www.google-analytics.com/analytics.js\';\n      r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));\n      ga(\'create\',\'UA-XXXXX-X\');ga(\'send\',\'pageview\');\n    </script></body></html>'),t.put("app/landing.html",'<div id="main-container"><section id="poster-header"></section><section id="main-content"></section></div>')}]);