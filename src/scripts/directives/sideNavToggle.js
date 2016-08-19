'use strict';
(function(module) {
  try {
    module = angular.module('dgp.navigation');
  } catch (e) {
    module = angular.module('dgp.navigation', ['dgp.dgpApi']);
  }
  module.directive('dgpSidenavCollapse',['dgpApi',function(dgpApi){
   return {
    restrict:'A',
    link:function(scope,elem,attr){
      if(!dgpApi.sideNavigation || !dgpApi.sideNavToggle){
        return;
      }
      elem.bind('click', function(){
        if(attr.dgpSidenavCollapse && attr.dgpSidenavCollapse.trim() !== ''){
          dgpApi.sideNavToggle.toggleById(attr.dgpSidenavCollapse);
          return false;
        }
      });
    }
};
}]);
})();
