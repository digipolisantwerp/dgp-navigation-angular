'use strict';
(function(module) {
  try {
    module = angular.module('dgp.navigation');
  } catch (e) {
    module = angular.module('dgp.navigation', ['dgp.dgpApi']);
  }
  module.directive('dgpNavAside',['dgpApi', '$timeout',function(dgpApi, $timeout){
   return {
    restrict:'AE',
    link:function(scope,elem,attr){

      $timeout(function() {
        if(!dgpApi.sideNavigation || !dgpApi.sideNavToggle){
          return;
        }

        var opts= {

        };
        if(attr.extraTop){
            opts.extraTop = parseInt(attr.extraTop);
        }

        if(attr.navId){
          dgpApi.sideNav.register(attr.navId,elem);
        }

        if(attr.autoSelect){
          opts.autoSelect = (attr.autoSelect === 'true');
        }
        var sideNav = dgpApi.sideNavigation(elem);
        sideNav.init(opts);
        if(attr.toggleId){
          dgpApi.sideNavToggle.register(attr.toggleId,sideNav);
        }
      });
    }
};
}]);
})();
