const MainController = require('./src/main.controller.js');
const FileManager = require('./src/filemanager.service.js');
const Publications = require('./src/publications.service.js');

angular.module('app', ['ngMaterial'])
  .config(($mdThemingProvider) => {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('indigo')
      .accentPalette('red');
  })
  .directive('app', () => ({
    templateUrl: 'src/app.html',
    controller: MainController,
    controllerAs: 'app'
  }))
  .service('FileManager', FileManager)
  .service('Publications', Publications);
