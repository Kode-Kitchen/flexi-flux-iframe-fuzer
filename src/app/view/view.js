'use strict';

angular.module('iframeScaffolder')
  .config(function ($stateProvider, SCAFFOLDER) {
    $stateProvider.state('view', {
      url: '/view?urls&layout&theme&active&sharing&autoplay',
      templateUrl: 'app/view/view.html',
      controller: 'ViewCtrl',
      params: SCAFFOLDER.state.params
    });
  });