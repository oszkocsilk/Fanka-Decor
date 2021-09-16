prod.directive('sizeInfo', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '=' 
      }, 
      templateUrl: 'js/directives/sizeInfo.html' 
    }; 
  }); 