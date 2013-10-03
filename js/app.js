'use strict';

/* App Module */

var calaos =  angular.module('calaos', ['ngRoute', 'ngAnimate']);

calaos.config(['$routeProvider', function($routeProvider) {

    var device;

    if (typeof calaosConfig.dev_mode !== "undefined") {
        device = calaosConfig.dev_mode;
    }
    else {
        if (typeof $location.search().d !== "undefined") {
            if ($location.search().d === "mobile")
                device = 'mobile';
            else if ($location.search().d === "desktop")
                device = 'desktop';
            else
                device = isMobile?'mobile':'desktop';
        }
        else
                device = isMobile?'mobile':'desktop';
    }

    $routeProvider.
      when('/mobile/main',  {templateUrl: 'partials/mobile/main.html',   controller: 'MainCtrl'}).
      when('/mobile/home',  {templateUrl: 'partials/mobile/home.html',   controller: 'RoomsListCtrl'}).
      when('/mobile/audio',  {templateUrl: 'partials/mobile/audio.html',   controller: 'AudioCtrl'}).
      when('/mobile/room/:room_name', {templateUrl: 'partials/mobile/room.html',  controller: 'RoomCtrl'}).
      when('/mobile/audio/:audio_name', {templateUrl: 'partials/mobile/audio_player.html',  controller: 'AudioPlayerCtrl'}).
      when('/mobile/settings', {templateUrl: 'partials/mobile/settings.html',  controller: 'SettingsCtrl'}).
      when('/mobile/color-picker', {templateUrl: 'partials/mobile/color-picker.html',  controller: 'ColorPickerCtrl'}).
      when('/desktop/home',  {templateUrl: 'partials/desktop/home.html',   controller: 'RoomsListCtrl'}).
      when('/desktop/room/:room_name', {templateUrl: 'partials/desktop/room.html',  controller: 'RoomCtrl'}).
      when('/desktop/settings', {templateUrl: 'partials/desktop/settings.html',  controller: 'SettingsCtrl'}).
    otherwise({redirectTo: '/' + device + '/main'})
}]);

calaos.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
