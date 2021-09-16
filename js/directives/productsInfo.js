prod.directive('productInfo', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '=' 
      }, 
      templateUrl: 'js/directives/productsInfo.html' 
    }; 
  }); 