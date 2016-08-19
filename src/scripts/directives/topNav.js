'use strict';
(function(module) {
  try {
    module = angular.module('dgp.navigation');
  } catch (e) {
    module = angular.module('dgp.navigation', ['dgp.dgpApi']);
  }
  module.directive('dgpTopNav',['$document','$window','dgpApi',function($document,$window,dgpApi){
   return {
    restrict:'AE',
    priority:99,
    link:function(scope,elem){
      if(!dgpApi.sideNavigation || !dgpApi.sideNavToggle){
        return;
      }
      dgpApi.topNavigation(elem).init();
  }
};
}]);
})();
